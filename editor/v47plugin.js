if (!SMARTDOT) {
	var SMARTDOT = {};
}
if (!SMARTDOT.CONFIG) {
	SMARTDOT.CONFIG = {};
}
if (!SMARTDOT.CONFIG.EVENT) {
	SMARTDOT.CONFIG.EVENT = {};
}

//Editor.CreateShape方法执行结束前产生这个事件(用来给图形生成id) shanglihui 20111123
SMARTDOT.CONFIG.EVENT_AFTER_CREATE_SHAPE = "smartdot.config.event_after_create_shape";
//粘贴图形时产生的事件
SMARTDOT.CONFIG.EVENT_ON_PASTE_SHAPE = "smartdot.config.event_on_paste_shape";
//自动布局
//ORYX.CONFIG.BPMN_LAYOUTER =				"/indishare/flowdesigner.nsf/xsp/layouter";
//默认不收缩右侧，用于隐藏
ORYX.CONFIG.PANEL_RIGHT_COLLAPSED = false;

ORYX.CONFIG.SSEXTS = [{
	namespace: "http://www.smartdot.com/stencilset/bpmn2.0#"
}];

if (!SMARTDOT.Plugins)
	SMARTDOT.Plugins = new Object();

// 自定义节点的属性
SMARTDOT.Plugins.CustomProperty = Clazz.extend({
	style: undefined,
	facade: undefined,
	tmpRichTextPlugin: undefined,
	construct: function(facade) {
		this.facade = facade;
		var mixinDeep = function(dest, source) {
			//Recursively mix the properties of two objects 
			var empty = {};
			for (var name in source) {
				if (!(name in dest) || (dest[name] !== source[name] && (!(name in empty) || empty[name] !== source[name]))) {
					try {
						if (source[name].constructor == Object) {
							dest[name] = mixinDeep(dest[name], source[name]);
						} else {
							dest[name] = source[name];
						};
					} catch (e) {
						// Property in destination object not set. Create it and set its value. 
						dest[name] = source[name];
					};
				};
			}
			return dest;
		}
		var customStyle = SMARTDOT.FLOWDESIGNER.customStyle || {};
		this.style = mixinDeep(SMARTDOT.FLOWDESIGNER.defaultStyle, customStyle);
		if (this.style) {
			this.facade.registerOnEvent(SMARTDOT.CONFIG.EVENT_AFTER_CREATE_SHAPE,
				this.exec.bind(this));
		}
	},
	exec: function(evt) {
		// 目前只处理task节点
		if (SMARTDOT.Plugins.AutoShapeCodePropertyNumber.prototype.getStencilId(evt.shape) !== "Task")
			return;
		// 计算自定义与原始svg的高度差
		var heightDiff = this.style.Task.height - evt.shape.bounds.height();
		var widthDiff = this.style.Task.width - evt.shape.bounds.width();
		// 设置节点大小
		evt.shape.bounds.extend({
			x: widthDiff,
			y: heightDiff
		});
		// 保证设置大小后中心位置与原来的一样
		evt.shape.bounds.moveBy({
			x: -widthDiff / 2,
			y: -heightDiff / 2
		});

		// 通过RichtextToolbar设置字体
		if (!this.tmpRichTextPlugin) {
			this.tmpRichTextPlugin = new Signavio.Plugins.RichtextToolbar(this.facade);
		}
		this.tmpRichTextPlugin.changeFont(null, "FontSize", this.style.Task.fontSize);

		evt.shape.setProperty("oryx-bg_frame", this.style.Task.borderColor);
		evt.shape.setProperty("oryx-flow_status_color", this.style.Task.bgColor);
	}
});

//图形被拖拽到画布上后自动排号（设置code属性）
SMARTDOT.Plugins.AutoShapeCodePropertyNumber = Clazz.extend({
	facade: undefined,
	curNum: -1,
	construct: function(facade) {
		this.facade = facade;
		this.facade.registerOnEvent(SMARTDOT.CONFIG.EVENT_AFTER_CREATE_SHAPE,
			this.exec.bind(this));
		this.facade.registerOnEvent(SMARTDOT.CONFIG.EVENT_ON_PASTE_SHAPE,
			this.exec.bind(this));
		this.facade.registerOnEvent(ORYX.CONFIG.EVENT_LOADED,
			this.onLoaded.bind(this));
	},
	exec: function(evt) {
		if (!evt.shape) {
			return;
		}
		var shape = evt.shape;
		var id = this.getStencilId(shape);
		if (id === 'StartNoneEvent') {
			shape.setProperty('name', ORYX.Core.StencilSet.getTranslation(shape.getStencil().property("oryx-name")._jsonProp, "value"));
			this.updateCode(shape, '0');
		} else if (id === 'EndNoneEvent') {
			shape.setProperty('name', ORYX.Core.StencilSet.getTranslation(shape.getStencil().property("oryx-name")._jsonProp, "value"));
			this.updateCode(shape, '9999');
		//} else if (id === 'Task' || id === 'Extflow' || id === 'Template' || id === 'Parallel' || id === 'Merger' || id === 'Condition') {
		} else {
			this.curNum += 1;
			this.updateCode(shape, this.curNum);
			return true;
		}
	},
	onLoaded: function() {
		this.curNum = this.getMaxNum(this.facade.getCanvas());
		this.updateEdgesCode(this.facade.getCanvas());
	},
	getStencilId: function(shape) {
		if (shape.getStencil) {
			return shape.getStencil().id().split("#")[1];
		} else {
			return shape.stencil.id;
		}
	},
	updateCode: function(shape, code) {
		if (shape.setProperty) {
			shape.setProperty('code', code);
		} else {
			shape.properties['code'] = code;
		}
	},
	updateEdgesCode: function(canvas) {
		var result = this.curNum;
		canvas.getChildEdges(true, function(shape){
			var n = this.getShapeCodeNumber(shape);
			if(!n){
				this.curNum += 1;
				this.updateCode(shape, this.curNum);
			}
		}.bind(this));
	},
	getMaxNum: function(canvas) {
		var result = 0;
		var me = this;
		canvas.getChildShapes(true, function(shape) {
			var n = me.getShapeCodeNumber(shape);
			//结束节点的编号不算在内
			if (n != 9999 && n > result) {
				result = n;
			}
		});
		return result;
	},
	getShapeCodeNumber: function(shape) {
		var result = 0;
		if (shape && shape.hasProperty('code')) {
			var p = shape.getProperty('code');
			result = parseInt(p, 10);
		}
		return result;
	}
});



if (!SMARTDOT.Plugins)
	SMARTDOT.Plugins = new Object();

SMARTDOT.Plugins.FlowValidate = Clazz.extend({

	// Defines the facade
	facade: undefined,

	// Constructor 
	construct: function(facade) {
		Ext.Msg.buttonText.ok = ORYX.I18N.Smartdot.btnOk;

		this.facade = facade;

		this.facade.offer({
			'name': 'validate',
			'functionality': this.perform.bind(this),
			'group': ORYX.I18N.SyntaxChecker.group,
			'icon': ORYX.PATH + "images/checker_syntax.png",
			'description': ORYX.I18N.Smartdot.processValidation


		});

	},

	validateJson: function(json) {
		var shapes = json.childShapes;
		var result = {
			sNode: 0, //开始节点数
			eNode: 0, //结束节点数
			template: 0, //流程部件数
			lineFromTo: {}, // 连线的开始和结束节点
			shapes: {}
		};

		for (var i = 0; i < shapes.length; i++) {
			var shape = shapes[i];
			var type = shape.stencil.id;
			var id = shape.resourceId;

			//子元素的结果，以resourceId为key
			result.shapes[id] = {
				type: type, //节点类型
				next: shape.outgoing.length, //后续节点数
				pre: 0, //前置节点数
				nextNodes: shape.outgoing,
        sdPro: shape.properties.smartdot_properties,
				isEmpty: shape.properties.smartdot_properties === "", //是否未配置过
				isDuplicate: false // 连线是否重复（已经有其他连线在相同的开始和结束节点）
			};
		}

		for (var i = 0; i < shapes.length; i++) {
			var shape = shapes[i];
			var type = shape.stencil.id;
			var id = shape.resourceId;

			//计算开始、结束节点
			if (type === "StartNoneEvent") result.sNode++;
			if (type === "EndNoneEvent") result.eNode++;
			if (type === "Template") result.template++;

			//处理前置节点属性
			for (j = 0; j < shape.outgoing.length; j++) {
				var outId = shape.outgoing[j].resourceId;
				result.shapes[outId].pre += 1;
			}

			// 处理连线是否重复
			if (type === "SequenceFlow") {
				// 只检查非条件分支的连线
				if (shape.properties.smartdot_properties !== "") {
					var lineJson = shape.properties.smartdot_properties.evalJSON(true);
					if (lineJson.tmpiscondition === "yes") {
						continue;
					}
				}

				if (shape.getShape().getSource() && shape.getShape().getTarget()) {
					var lineId = shape.getShape().getSource().getId() + "," + shape.getShape().getTarget().getId();
					if (!result.lineFromTo[lineId]) {
						result.lineFromTo[lineId] = true;
					} else {
						result.shapes[id].isDuplicate = true;
					}
				}
			}
		}

		var msg = [];
		if (result.sNode === 0) msg.push(ORYX.I18N.Smartdot.missingStartMsg);
		if (result.eNode === 0) msg.push(ORYX.I18N.Smartdot.missingEndMsg);
		for (id in result.shapes) {
			var shape = result.shapes[id];
			var errorLength = msg.length; //记录原始错误信息长度
			if (shape.type === "StartNoneEvent") {
				if (result.sNode > 1) msg.push(ORYX.I18N.Smartdot.multipleStartMsg);
				if (!shape.next) msg.push(ORYX.I18N.Smartdot.missingStartLineMsg);
			}
			if (shape.type === "EndNoneEvent") {
				if (result.eNode > 1) msg.push(ORYX.I18N.Smartdot.multipleEndMsg);
				if (!shape.pre) msg.push(ORYX.I18N.Smartdot.missingEndLineMsg);
			}
			if (shape.type === "Parallel") {
				if (!shape.next || !shape.pre) {
					msg.push(ORYX.I18N.Smartdot.notConnectedForSplit);
				}
				if (shape.isEmpty) {
					msg.push(ORYX.I18N.Smartdot.notConfiguredForSplit);
				}
			}
			if (shape.type === "Merger") {
				if (shape.next > 1) msg.push(ORYX.I18N.Smartdot.theOnlyOneLineForMerger);
				if (!shape.next || !shape.pre) {
					msg.push(ORYX.I18N.Smartdot.notConnectedForMerger);
				}
				if (shape.isEmpty) {
					msg.push(ORYX.I18N.Smartdot.notConfiguredForMerger);
				}
			}
			if (shape.type === "Extflow") {
				if (shape.next > 1) msg.push(ORYX.I18N.Smartdot.theOnlyOneLineForTrigger);
				if (!shape.next || !shape.pre) {
					msg.push(ORYX.I18N.Smartdot.notConnectedForTrigger);
				}
				if (shape.isEmpty) {
					msg.push(ORYX.I18N.Smartdot.notConfiguredForTrigger);
				}
			}
			if (shape.type === "Template") {
				if (result.template > 1) msg.push(ORYX.I18N.Smartdot.multipleTmplMsg);
				if (!shape.next || !shape.pre) {
					msg.push(ORYX.I18N.Smartdot.missingTmplLineMsg);
				}
				if (shape.next > 1 || shape.pre > 1) {
					msg.push(ORYX.I18N.Smartdot.tmplNoneMsg);
				}

				if (shape.isEmpty) {
					msg.push(ORYX.I18N.Smartdot.tmplNotConfigMsg);
				}
			}
			if (shape.type === "SequenceFlow") {
				if (!shape.next || !shape.pre) {
					msg.push(ORYX.I18N.Smartdot.sequenceFlowMsg);
				}
				if (shape.isDuplicate) {
					msg.push(ORYX.I18N.Smartdot.multipleLineMsg);
				}
			}
			if (shape.type !== "SequenceFlow") {
        if(shape.next>1){
          //排他线计数
          var count = 0;
          shape.nextNodes.forEach(function(outgoing){
            var prop = result.shapes[outgoing.resourceId].sdPro;
            if(prop=="") {
              return;
            }
            prop = JSON.parse(prop);
            if(prop["tmpiscondition"] && prop["tmpiscondition"]=="yes" && prop["tmpothercondition"] && prop["tmpothercondition"]=="yes"){
              count++;
            }
          });

          if(count>1){
            msg.push(ORYX.I18N.Smartdot.tooManyOtherConditionLineMsg);
          }
        }
      }
			if (shape.type === "Task") {
				if (!shape.next || !shape.pre) {
					msg.push(ORYX.I18N.Smartdot.taskNoneMsg);
				}
				if (shape.isEmpty) {
					msg.push(ORYX.I18N.Smartdot.taskNotConfigMsg);
				}

				try {
					var getPreNodeType = function(shape) {
						var nodetype = "";
						if (~shape.getStencil().id().indexOf("SequenceFlow")) {
							return nodetype;
						}
						shape.getIncomingShapes().each(function(line) {
							try {
								nodetype = line.getIncomingShapes()[0].getStencil().id();
							} catch (e) {};
						});

						return nodetype;
					};
					var orishape = shapes.findAll(function(item) {
						return item.resourceId == id
					})[0];
					var pretype = getPreNodeType(orishape.getShape());
					var sdPro = JSON.parse(orishape.properties.smartdot_properties);
					if (~pretype.indexOf("Extflow") && sdPro.tmpname == "5") {
						msg.push(ORYX.I18N.Smartdot.taskHasNotDealMsg);
					}
				} catch (e) {}

			}

			var svgNode = this.facade.getCanvas().getChildShapeByResourceId(id).node;
			var strClass = svgNode.getAttributeNS('', 'class') || "";
			if (errorLength === msg.length) {
				if (strClass.lastIndexOf(" validate-error") !== -1) {
					svgNode.setAttributeNS('', 'class', strClass.replace(' validate-error', ''));
				}
			} else {
				//如果错误信息长度发生了变化，说明出现了错误，增加class
				if (strClass.lastIndexOf(" validate-error") === -1) {
					svgNode.setAttributeNS('', 'class', strClass + ' validate-error');
				}
			}
		}
		var validateGateway = function(facade) {
			var allshapes = facade.getCanvas().getChildNodes(true);
			var allParallel = allshapes.findAll(function(node) {
				return node.getStencil().id().indexOf('Parallel') > -1
			});
			var allMerger = allshapes.findAll(function(node) {
				return node.getStencil().id().indexOf('Merger') > -1
			});
			if (allParallel.length != allMerger.length) {
				return ORYX.I18N.Smartdot.splitAndMergeDoesNotMatch
			}
			var _getNextNodes = function(node) {
				var lines = node.outgoing;
				return lines.collect(function(line) {
					return line.outgoing[0]
				});
			};
			var stack = [];
			var rootLevelNode = allshapes.find(function(item) {
				return '0' === item.properties['oryx-code']
			});
			var msg = '';
			var visited = {};

			(function _validateGateway(curNode, isMerge) {
				if (!curNode) return;
				if (visited[curNode.properties['oryx-code']] && visited[curNode.properties['oryx-code']] > 10) {
					return;
				} else {
					if (!isMerge && curNode.properties['oryx-code'] != '9999' && !~curNode.getStencil().id().indexOf('Merger')) {
						visited[curNode.properties['oryx-code']] = visited[curNode.properties['oryx-code']] ? visited[curNode.properties['oryx-code']] + 1 : 1;
					}
				}
				var nextNodes = _getNextNodes(curNode);
				var _stack = [].slice.call(stack);
				if (curNode.getStencil().id().indexOf('Parallel') > -1) {
					nextNodes.each(function(node) {
						var tmpStack = [].slice.call(_stack);
						tmpStack.unshift(curNode.properties['oryx-name']);
						stack = [].slice.call(tmpStack);
						_validateGateway(node);
					});
				} else if (curNode.getStencil().id().indexOf('Merger') > -1) {
					nextNodes.each(function(node) {
						var tmpStack = [].slice.call(_stack);
						stack = [].slice.call(tmpStack);
						if (stack.length <= 0) {
							msg = ORYX.I18N.Smartdot.splitAndMergeDoesNotMatch
						}
						stack.shift();
						_validateGateway(node, true);
					});
				} else if (curNode.getStencil().id().indexOf('EndNoneEvent') > -1) {
					if (stack.length != 0) {
						msg = ORYX.I18N.Smartdot.splitAndMergeDoesNotMatch
					}
				} else {
					nextNodes.each(function(node) {
						var tmpStack = [].slice.call(_stack);
						stack = [].slice.call(tmpStack);
						_validateGateway(node);
					});
				}
			})(rootLevelNode, rootLevelNode.properties["oryx-code"]);
			return msg;
		}
		var gatewayMsg = validateGateway(this.facade);
		if (gatewayMsg != "") {
			msg.push(gatewayMsg)
		}

		var validateConditionCombo = function(facade){
			var allshapes = facade.getCanvas().getChildNodes(true);
			var allCondition = allshapes.findAll(function(node) {
				return node.getStencil().id().indexOf('Condition') > -1
			});			
			var _getNextNodes = function(node) {
				var lines = node.outgoing;
				return lines.collect(function(line) {
					return line.outgoing[0]
				});
			};
			var msg;
			allCondition.forEach(function(node){
				(function _validateConditionCombo(curNode, visited){
					visited = visited || {};
					if (!curNode) return;
					if (visited[curNode.properties['oryx-code']]) {
						msg = ORYX.I18N.Smartdot.conditioncombo;
						return;
					}
					if(~curNode.getStencil().id().indexOf('Condition')){
						visited[curNode.properties['oryx-code']] = true;
					}
					var nextNodes = _getNextNodes(curNode);
					if (~curNode.getStencil().id().indexOf('Condition')) {
						nextNodes.each(function(nextNode) {
							var visitedClone = {};
							Ext.apply(visitedClone, visited);
							_validateConditionCombo(nextNode, visitedClone);
						});
					}
				})(node);
			});

			return msg;
		}

		var comboMsg = validateConditionCombo(this.facade);
		if (comboMsg) {
			msg.push(comboMsg)
		}
		return msg;
	},

	perform: function() {
		var title = '';
		var msg = this.validateJson(this.facade.getJSON());
		Ext.Msg.alert(ORYX.I18N.Smartdot.validationResultsMsg, msg.uniq().join("<br>") || ORYX.I18N.Smartdot.successMsg);
	}
});

var FLOW_PRO = {
	flowName: '',
	desc: '',
	tmpUser: '',
	tmpFilePath: '',
	category: '',
	editor: ''
};


SMARTDOT.Plugins.FlowPro = Clazz.extend({

	// Defines the facade
	facade: undefined,

	// Constructor 
	construct: function(facade) {

		this.facade = facade;

		this.facade.offer({
			'name': 'flow pro',
			'functionality': this.perform.bind(this),
			'group': ORYX.I18N.SyntaxChecker.group,
			'icon': ORYX.PATH + "images/information.png",
			'description': ORYX.I18N.Smartdot.processProperties


		});
		this.facade.registerOnEvent(ORYX.CONFIG.EVENT_LOADED, this.onLoaded.bind(this));
	},

	perform: function() {
		if (!window.showModalDialog) {
			var win = window.open("/indishare/flowdesigner.nsf/flow_prop.xsp" + location.search, "_blank", "width=500,height=300,scrollbars=yes,status=no,titlebar=no,toolbar=no");
			win.dialogArguments = FLOW_PRO;
			var listener = function(e) {
				var href = this.location.href;
				if (href == "about:blank") {
					return;
				}

				var ret = this.returnValue;
				if (!ret) {
					return;
				}
				Ext.apply(FLOW_PRO, ret);
				win.removeEventListener("unload", listener, false);
			};
			win.addEventListener("unload", listener, false);
			return;
		}

		var ret = window.showModalDialog("/indishare/flowdesigner.nsf/flow_prop.xsp" + location.search, FLOW_PRO, "dialogWidth:500px;dialogHeight:300px");
		if (!ret) {
			return;
		}
		Ext.apply(FLOW_PRO, ret);
	},
	onLoaded: function() {
		var config = this.facade.getModelMetaData();
		FLOW_PRO.flowName = config.name || "";
		var map = {
			"name": "flowName"
		};
		Object.keys(config).filter(function(pro) {
			return ~pro.indexOf("i18n");
		}).forEach(function(pro) {
			var arr = pro.split("-");
			arr[1] = map[arr[1]];
			FLOW_PRO[arr.join("-")] = config[pro];
		});
		FLOW_PRO.desc = config.description || "";
		FLOW_PRO.tmpUser = config.tmpUser || "";
		FLOW_PRO.tmpFilePath = config.tmpFilePath || "";
		FLOW_PRO.category = config.category || "";
		FLOW_PRO.editor = config.editor || "";

		var matcher = document.cookie.match(/indi_locale=([^;]*?);/);
		if (matcher) {
			var curlocale = matcher[1] || "zh-cn";
			Object.keys(config).forEach(function(key) {
				if (~key.indexOf("i18n-name")) {
					var locale = key.split("-")[2];
					if (curlocale == locale) {
						$("header-document-name").innerHTML = config[key];
					}
				}
			});
		}
		
	}

});


if (!SMARTDOT.Plugins)
	SMARTDOT.Plugins = new Object();



SMARTDOT.Plugins.NodeDialog = Clazz.extend({

	// Defines the facade
	facade: undefined,



	// Constructor 
	construct: function(facade) {

		this.facade = facade;

		this.facade.registerOnEvent(ORYX.CONFIG.EVENT_DBLCLICK, this.nodeDbclick.bind(this));
		this.facade.registerOnEvent(ORYX.CONFIG.EVENT_PROPERTY_CHANGED, this.propertyChanged.bind(this));

	},

	initPro: function(shape) {

		return shape.properties['oryx-smartdot_properties'];

	},
	getPreNodeType: function(shape) {
		var nodetype = "";
		if (~shape.getStencil().id().indexOf("SequenceFlow")) {
			return nodetype;
		}
		shape.getIncomingShapes().each(function(line) {
			try {
				nodetype = line.getIncomingShapes()[0].getStencil().id();
			} catch (e) {};
		});

		return nodetype;
	},

	//处理环节名称，供驳回使用
	getAllNodeNameAndId: function() {
		var allshapes = this.facade.getCanvas().getChildNodes(true);

		var _getNodeName = function(node) {
			if (node.getStencil().id().indexOf('Task') > -1) {
				var shapeName = node.properties['oryx-name'];
				var shapeId = node.properties['oryx-code'];
				return ((shapeName || "") + "|" + shapeId);
			} else if (node.getStencil().id().indexOf('StartNoneEvent') > -1) {
				return ("开始|0");
			} else if (node.getStencil().id().indexOf('EndNoneEvent') > -1) {
				return ("|9999");
			}
			return null;
		};
		var _getNextNodes = function(node) {
			var lines = node.outgoing;
			return lines.collect(function(line) {
				return line.outgoing[0]
			});
		};
		var allNodeNames = [
			[]
		];
		var stack = [];
		var rootLevelNode = allshapes.find(function(item) {
			return '0' === item.properties['oryx-code']
		});
		var visited = {};
		(function _getAllNodeNameAndId(curNode, curLevelNodes, isMerge) {
			if (!curNode) return;
			if (visited[curNode.properties['oryx-code']] && visited[curNode.properties['oryx-code']] > 10) {
				return;
			} else {
				if (!isMerge && curNode.properties['oryx-code'] != '9999' && !~curNode.getStencil().id().indexOf('Merger')) {
					visited[curNode.properties['oryx-code']] = visited[curNode.properties['oryx-code']] ? visited[curNode.properties['oryx-code']] + 1 : 1;
				}
			}
			if (curNode.getStencil().id().indexOf('Parallel') > -1) {
				stack.unshift({
					node: curNode,
					level: curLevelNodes
				});
				var nextNodes = _getNextNodes(curNode);
				nextNodes.each(function(node) {
					var newLevelNodes = [];
					allNodeNames.push(newLevelNodes);
					_getAllNodeNameAndId(node, newLevelNodes);
				});
			} else if (curNode.getStencil().id().indexOf('Merger') > -1) {
				if (!stack[0]) return;
				var parallelLevelNodes = stack[0].level;
				stack.shift();
				var nextNodes = _getNextNodes(curNode);
				nextNodes.each(function(node) {
					_getAllNodeNameAndId(node, parallelLevelNodes, true);
				});
			} else {
				if (!~curLevelNodes.indexOf(_getNodeName(curNode))) {
					curLevelNodes.push(_getNodeName(curNode));
				}
				var nextNodes = _getNextNodes(curNode);
				nextNodes.each(function(node) {
					_getAllNodeNameAndId(node, curLevelNodes);
				});
			}
		})(rootLevelNode, allNodeNames[0]);

		allNodeNames = allNodeNames.collect(function(item) {
			return item.findAll(function(node) {
				return !!node
			})
		});
		return allNodeNames;
	},

	isInBfsubflow: function(shape) {
		var ret = false;

		var _getNextNodes = function(node) {
			var lines = node.outgoing;
			return lines.collect(function(line) {
				return line.outgoing[0]
			})[0];
		};

		var visited = [];
		ret = (function _isbf(node) {
			if (!node) return false;
			if (~visited.indexOf(node.properties['oryx-code'])) {
				return false;
			} else {
				visited.push(node.properties['oryx-code']);
			}
			if (node.getStencil().id().indexOf('Merger') > -1) {
				return true;
			} else {
				return _isbf(_getNextNodes(node));
			}
		})(shape);

		return ret;
	},

	nodeDbclick: function(evt, shape) {

		if (!shape.getStencil) {
			return;
		}
		var nodetype = shape.getStencil().id();
		var ret = null;
		var flow_pro_array;
		var winWidth = 600;
		var winHeight = 400;
		if (nodetype.indexOf('Task') > -1) { //node	
			var pfile = "/indishare/flowdesigner.nsf/node_prop.xsp";
			var strTitle = ORYX.I18N.Smartdot.nodeProperties;
		} else if (nodetype.indexOf('Extflow') > -1) {
			var pfile = "/indishare/flowdesigner.nsf/extflow_prop.xsp";
			var strTitle = ORYX.I18N.Smartdot.triggerProcessProperties;
		} else if (nodetype.indexOf('SequenceFlow') > -1) { //line
			var pfile = "/indishare/flowdesigner.nsf/line_prop.xsp";
			var strTitle = ORYX.I18N.Smartdot.flowProperties;
		} else if (nodetype.indexOf('Template') > -1) {
			var pfile = "/indishare/flowdesigner.nsf/tmpl_prop.xsp";
			var strTitle = ORYX.I18N.Smartdot.tmplProperties;
		} else if (nodetype.indexOf('Parallel') > -1) {
			var pfile = "/indishare/flowdesigner.nsf/parallel_prop.xsp";
			var strTitle = ORYX.I18N.Smartdot.splitProperties;
		} else if (nodetype.indexOf('Merger') > -1) {
			var pfile = "/indishare/flowdesigner.nsf/merger_prop.xsp";
			var strTitle = ORYX.I18N.Smartdot.mergeProperties;
		} else if (nodetype.indexOf('StartNoneEvent') > -1) {
			var pfile = "/indishare/flowdesigner.nsf/start_prop.xsp";
			var strTitle = ORYX.I18N.Smartdot.startNodeProperties;
		} else if (nodetype.indexOf('EndNoneEvent') > -1) {
			var pfile = "/indishare/flowdesigner.nsf/end_prop.xsp";
			var strTitle = ORYX.I18N.Smartdot.endNodeProperties;
		} else {
			return;
		}
		pfile += location.search;
		flow_pro_array = this.initPro(shape);
		//临时改用ext对话框，因为firefox会阻止多次弹出dialog	zhaofx	2012-02-12	
		_node_property.win = new Ext.IframeWindow({
			id: 'Propertie_Window',
			width: winWidth,
			height: winHeight,
			title: strTitle,
			modal: true,
			src: pfile
		});
		//将相关信息存储到一个全局变量
		_node_property.val = flow_pro_array;
		_node_property.allNodeNames = this.getAllNodeNameAndId();
		_node_property.isInBfsubflow = this.isInBfsubflow(shape);
		_node_property.shape = shape;
		_node_property.nodetype = nodetype;
		_node_property.preNodeType = this.getPreNodeType(shape);
		_node_property.that = this;
		_node_property.win.show();
		try {
			window.getSelection && window.getSelection().removeAllRanges();
		} catch (e) {};

	},

	propertyChanged: function(option, node) {
		// 更新环节图标的title
		if (option.name.indexOf("oryx-icon") === 0) {
			var title;
			var value = option.value;
			if (value.indexOf("gaizhang") !== -1) {
				title = ORYX.I18N.Smartdot.gaizhang;
			} else if (value.indexOf("taoda") !== -1) {
				title = ORYX.I18N.Smartdot.taoda;
			} else if (value.indexOf("bianhao") !== -1) {
				title = ORYX.I18N.Smartdot.bianhao;
			} else if (value.indexOf("huiqian") !== -1) {
				title = ORYX.I18N.Smartdot.huiqian;
			} else {
				title = "";
			}
			node.getSVGShape(option.name.split("oryx-")[1]).element.firstChild.textContent = title;
		}
	}


});


if (!SMARTDOT.Plugins)
	SMARTDOT.Plugins = new Object();

SMARTDOT.Plugins.Save_smartdot = Clazz.extend({

	facade: undefined,

	processURI: undefined,

	changeSymbol: "*",

	construct: function(facade) {
		this.facade = facade;

		this.facade.offer({
			'name': ORYX.I18N.Save.save,
			'functionality': this.save.bind(this, false),
			'group': ORYX.I18N.Save.group,
			'icon': ORYX.PATH + "images/disk.png",
			'description': ORYX.I18N.Save.saveDesc,
			'index': 1,
			'minShape': 0,
			'maxShape': 0,
			keyCodes: [{
				metaKeys: [ORYX.CONFIG.META_KEY_META_CTRL],
				keyCode: 83, // s-Keycode
				keyAction: ORYX.CONFIG.KEY_ACTION_UP
			}]
		});

		document.addEventListener("keydown", function(e) {
			if (e.ctrlKey && e.keyCode === 83) {
				Event.stop(e);
			}
		}, false)



		window.onbeforeunload = this.onUnLoad.bind(this)

		this.changeDifference = 0;

		// Register on event for executing commands --> store all commands in a stack		 
		// --> Execute
		this.facade.registerOnEvent(ORYX.CONFIG.EVENT_UNDO_EXECUTE, function() {
			this.changeDifference++;
			this.updateTitle();
		}.bind(this));
		this.facade.registerOnEvent(ORYX.CONFIG.EVENT_EXECUTE_COMMANDS, function() {
			this.changeDifference++;
			this.updateTitle();
		}.bind(this));
		// --> Rollback
		this.facade.registerOnEvent(ORYX.CONFIG.EVENT_UNDO_ROLLBACK, function() {
			this.changeDifference--;
			this.updateTitle();
		}.bind(this));

		// --> Editor Loaded, to update the title of imported diagrams
		this.facade.registerOnEvent(ORYX.CONFIG.EVENT_LOADED, this.updateTitle.bind(this));

		//增加自动保存功能
		var autosave = ORYX.Utils.getParamFromUrl("autosave") === "true";
		if (autosave) {
			var that = this;
			this.facade.registerOnEvent(ORYX.CONFIG.EVENT_LOADED, function() {
				setTimeout(that.save.bind(that), 1000);
			});
		}
		//TODO very critical for load time performance!!!
		//this.serializedDOM = DataManager.__persistDOM(this.facade);

		//shanglihui 20111213 扩展一个调用保存逻辑的事件
		this.facade.registerOnEvent(SMARTDOT.CONFIG.EVENT.FILE_SAVE, this.save.bind(this));
	},

	updateTitle: function() {

		var value = window.document.title || document.getElementsByTagName("title")[0].childNodes[0].nodeValue;

		if (this.changeDifference === 0 && value.startsWith(this.changeSymbol)) {
			window.document.title = value.slice(1);
		} else if ((this.isNewNonEmptyModel() || this.changeDifference !== 0) && !value.startsWith(this.changeSymbol)) {
			window.document.title = this.changeSymbol + "" + value;
		}
	},

	/**
	 *	Returns true if the model has child elements and is newly created or
	 *	imported.
	 */
	isNewNonEmptyModel: function() {
		return this.facade.getModelMetaData()['new'] && this.facade.getModelMetaData().model.childShapes;
	},

	onUnLoad: function() {
		if (this.changeDifference !== 0 || this.isNewNonEmptyModel()) {
			return ORYX.I18N.Save.unsavedData;
		}
	},


	save: function(forceNew, event) {
		var json = this.facade.getJSON();
		var autosave = ORYX.Utils.getParamFromUrl("autosave") === "true";

		var callback = function(ret) {
			if (!autosave && !ret) {
				return false;
			}
			Ext.apply(FLOW_PRO, ret || FLOW_PRO);
			this.saving = false;

			var svgClone = this.facade.getCanvas().getSVGRepresentation(true);

			// 去掉SVG中高亮显示的标记、环节的图标
			$A(svgClone.querySelectorAll(".controls,image,g.stencils > g[pointer-events='none']")).each(function(node) {
				node.parentNode.removeChild(node);
			});

			var svgDOM = DataManager.serialize(svgClone);
			var allshapes = this.facade.getCanvas().getChildShapes(true);
			var i18n = {};
			allshapes.forEach(function(shape) {
				var sdProperty = JSON.parse(shape.getProperty("oryx-smartdot_properties") || "{}");
				var nodetype = shape.getStencil().id();
				var keys = Object.keys(sdProperty).filter(function(key) {
					return ~key.indexOf("i18n-") && (~key.indexOf("tmpstat") || ~key.indexOf("tmpname"));
				}).forEach(function(key) {
					var locale = key.split("-")[2];
					i18n[locale] = true;
				});
			});
			i18n = Object.keys(i18n);
			var facade = this.facade;
			var rawSdProperty = {};
			allshapes.forEach(function(shape) {
				rawSdProperty[shape.id] = shape.getProperty("oryx-smartdot_properties");
			});
			var bundle = {
				"start": {
					"en": "Begin",
					"zh": "开始"
				},
				"end": {
					"en": "End",
					"zh": "结束"
				}
			}
			var _updateI18n = function(locale) {
				allshapes.forEach(function(shape) {
					var sdProperty = JSON.parse(shape.getProperty("oryx-smartdot_properties") || "{}");
					var raw = JSON.parse(rawSdProperty[shape.id] || "{}");
					var nodetype = shape.getStencil().id();
					if (~nodetype.indexOf("#Task") || ~nodetype.indexOf("#Parallel") || ~nodetype.indexOf("#Merger") || ~nodetype.indexOf("#Extflow")) {
						shape.setProperty("oryx-name", sdProperty["i18n-tmpstat-" + locale] || raw["tmpstat"]);
					} else if (~nodetype.indexOf("#SequenceFlow") || ~nodetype.indexOf("#Template")) {
						shape.setProperty("oryx-name", sdProperty["i18n-tmpname-" + locale] || raw["tmpname"] || "");
					} else if (~nodetype.indexOf("#StartNoneEvent")) {
						shape.setProperty("oryx-name", bundle["start"][locale] || bundle["start"]["zh"]);
					} else if (~nodetype.indexOf("#EndNoneEvent")) {
						shape.setProperty("oryx-name", bundle["end"][locale] || bundle["start"]["zh"]);
					}
				});
				facade.getCanvas().update();
				facade.updateSelection();
				var ends = Q.defer();
				setTimeout(function() {
					facade.updateSelection();
					var svgClone = facade.getCanvas().getSVGRepresentation(true)
						// 去掉SVG中高亮显示的标记、环节的图标
					$A(svgClone.querySelectorAll(".controls,image,g.stencils > g[pointer-events='none']")).each(function(node) {
						node.parentNode.removeChild(node);
					});
					var ret = {
						locale: locale,
						svg: DataManager.serialize(svgClone)
					};
					ends.resolve(ret);
				}, 500);
				return ends.promise;
			};
			
			var updateI18n = function(index){
				index = index || 0;
				return _updateI18n(i18n[index])
					.then(function(data) {
						if (index >= i18n.length) {
							return []
						}

						return updateI18n(index + 1)
							.then(function(next) {
								return [].concat(data, next);
							});
					});
			};

			var _restoreI18n = function(Data) {
				allshapes.forEach(function(shape) {
					var sdProperty = JSON.parse(rawSdProperty[shape.id] || "{}");
					var nodetype = shape.getStencil().id();
					if (~nodetype.indexOf("#Task") || ~nodetype.indexOf("#Parallel") || ~nodetype.indexOf("#Merger") || ~nodetype.indexOf("#Extflow")) {
						sdProperty["tmpstat"] && shape.setProperty("oryx-name", sdProperty["tmpstat"]);
					} else if (~nodetype.indexOf("#SequenceFlow") || ~nodetype.indexOf("#Template")) {
						sdProperty["tmpname"] && shape.setProperty("oryx-name", sdProperty["tmpname"] || "");
					} else if (~nodetype.indexOf("#StartNoneEvent")) {
						shape.setProperty("oryx-name", bundle["start"]["zh"]);
					} else if (~nodetype.indexOf("#EndNoneEvent")) {
						shape.setProperty("oryx-name", bundle["end"]["zh"]);
					}
				});
				facade.getCanvas().update();
				setTimeout(function() {
					facade.updateSelection();
				}, 500);
				return Data;
			};
			var jsonFileName = json.properties.id;
			if (jsonFileName === '') {
				jsonFileName = 'default';
			}

			this.serializedDOM = Ext.encode(json);

			var allNodeNames = Ext.encode(SMARTDOT.Plugins.NodeDialog.prototype.getAllNodeNameAndId.bind(this)());

			var params = {
				json_xml: this.serializedDOM,
				svg: svgDOM,
				title: jsonFileName,
				summary: '',
				type: " http://b3mn.org/stencilset/smartdot#",
				allNodeNames: allNodeNames,
				name: FLOW_PRO.flowName,
				description: FLOW_PRO.desc,
				tmpUser: FLOW_PRO.tmpUser,
				tmpFilePath: FLOW_PRO.tmpFilePath,
				category: FLOW_PRO.category,
				editor: FLOW_PRO.editor
			};
			var map = {
				"flowName": "name"
			};
			Object.keys(FLOW_PRO).filter(function(pro) {
				return ~pro.indexOf("i18n");
			}).forEach(function(pro) {
				var arr = pro.split("-");
				arr[1] = map[arr[1]];
				params[arr.join("-")] = FLOW_PRO[pro];
			});
			
			// 所有svg都渲染完再提交
			updateI18n()
				.then(_restoreI18n)
				.then(function(Data) {
					Data.forEach(function(i18n) {
						params["i18n-svg-" + i18n.locale] = i18n.svg;
					});
					var url = "/indishare/flowdesigner.nsf/save?open" + location.search.replace("?", "&");
					//var url = "/indishare/flowdesigner.nsf/flowaction.xsp/service" + location.search;
					// Send the request to the server.
					new Ajax.Request(url, {
						method: 'POST',
						asynchronous: true,
						parameters: params,
						//postBody : Object.toJSON({"method":"save","params":[params]}),
						//requestHeaders: { 'Content-Type': 'application/json' },
						onSuccess: (function(transport) {
							this.facade.raiseEvent({
								type: ORYX.CONFIG.EVENT_LOADING_DISABLE
							});
							try {
								var resJSON = transport.responseText.evalJSON();
							} catch (e) {
								Ext.Msg.alert(ORYX.I18N.Smartdot.saveErrorMsg, ORYX.I18N.Smartdot.saveAgtError);
								return;
							}
							if (resJSON.error) {
								Ext.Msg.alert(ORYX.I18N.Smartdot.saveErrorMsg, resJSON.error);
								return;
							}

							//20120106 shanglihui
							this.changeDifference = 0;
							this.updateTitle();

							var loc = transport.getResponseHeader("location");
							if (loc) {
								this.processURI = loc;
							} else {
								this.processURI = url;
							}

							//raise saved event
							this.facade.raiseEvent({
								type: ORYX.CONFIG.EVENT_MODEL_SAVED
							});
							//show saved status
							this.facade.raiseEvent({
								type: ORYX.CONFIG.EVENT_LOADING_STATUS,
								text: ORYX.I18N.Save.saved
							});
							Ext.Msg.alert(ORYX.I18N.Smartdot.alert, ORYX.I18N.Smartdot.savesuccessMsg);
							try {
								// 刷新流程列表
								window.opener.XSP.partialRefreshGet(window.opener.dojo.query(".inner-table")[0].id, {});
							} catch (e) {};
							if(typeof _autosave_onSuccess !="undefined"){
								_autosave_onSuccess.bind(this)();
							}
							window.close();
						}).bind(this),
						onFailure: (function(transport) {
							// raise loading disable event.
							this.facade.raiseEvent({
								type: ORYX.CONFIG.EVENT_LOADING_DISABLE
							});


							Ext.Msg.alert(ORYX.I18N.Oryx.title, ORYX.I18N.Save.failed);

							ORYX.log.warn("Saving failed: " + transport.responseText);
						}).bind(this),
						on403: (function(transport) {
							// raise loading disable event.
							this.facade.raiseEvent({
								type: ORYX.CONFIG.EVENT_LOADING_DISABLE
							});


							Ext.Msg.alert(ORYX.I18N.Oryx.title, ORYX.I18N.Save.noRights);

							ORYX.log.warn("Saving failed: " + transport.responseText);
						}).bind(this)
					});
				}.bind(this));

				this.facade.raiseEvent({
					type: ORYX.CONFIG.EVENT_LOADING_ENABLE,
					text: ORYX.I18N.Smartdot.saveMsg
				});
		};

		if (!autosave) {
			// 保存前先验证
			var msg = SMARTDOT.Plugins.FlowValidate.prototype.validateJson.bind(this)(json);
			if (msg.length !== 0) {
				Ext.Msg.alert(ORYX.I18N.Smartdot.validationResultsMsg, msg.uniq().join("<br>"));
				return false;
			}

			if (this.facade.getModelMetaData()["modelId"] && !confirm(ORYX.I18N.Smartdot.flowChangedMsg)) {
				return false;
			}
			if (!window.showModalDialog) {
				var win = window.open("/indishare/flowdesigner.nsf/flow_prop.xsp" + location.search, "_blank", "width=500,height=300,scrollbars=yes,status=no,titlebar=no,toolbar=no");
				win.dialogArguments = FLOW_PRO;

				var listener = function() {
					var href = win.location.href;
					if (href == "about:blank") {
						return;
					}
					var ret = win.returnValue;
					if (!ret) {
						return;
					}

					callback.bind(this)(ret);
					win.removeEventListener("unload", listener.bind(this), false);
				};

				win.addEventListener("unload", listener.bind(this), false);
				return;
			}

			var ret = window.showModalDialog("/indishare/flowdesigner.nsf/flow_prop.xsp" + location.search, FLOW_PRO, "dialogWidth:500px;dialogHeight:300px");

		}

		callback.bind(this)(ret);

		return true;
	}
});


Ext.IframeWindow = Ext.extend(Ext.Window, {
	onRender: function() {
		this.bodyCfg = {
			tag: 'iframe',
			src: this.src,
			cls: this.bodyCls,
			style: {
				border: '0px none'
			}
		};
		Ext.IframeWindow.superclass.onRender.apply(this, arguments);
	},
	listeners: {
		close: function() {
			this.destroy();
		}
	}
});

var _node_property = {};

_node_property.update = function(ret) {
	if (ret) {
		var shape = this.shape;
		var nodetype = this.nodetype;

		shape.setProperty('oryx-smartdot_properties', ret);

		var retObject = ret.evalJSON();

		if (nodetype.indexOf('Task') > -1) { //node	
			shape.setProperty('oryx-name', retObject.tmpstat);
			shape.setProperty('oryx-code_dhz', retObject.tmpcode);

			var iconCount = 0;
			if (retObject['tmpgzhj'] === "yes") {
				iconCount++;
				shape.setProperty('oryx-icon' + iconCount, '/v5designer/smartdot/gaizhang.png');
			}
			if (retObject['tmpdyhj'] === "yes") {
				iconCount++;
				shape.setProperty('oryx-icon' + iconCount, '/v5designer/smartdot/taoda.gif');
			}
			if (retObject['tmpbhhj'] === "yes") {
				iconCount++;
				shape.setProperty('oryx-icon' + iconCount, '/v5designer/smartdot/bianhao.png');
			}
			if (retObject['tmpbmhq'] === "yes") {
				iconCount++;
				shape.setProperty('oryx-icon' + iconCount, '/v5designer/smartdot/huiqian.gif');
			}
			for (var i = iconCount + 1; i <= 6; i++) {
				shape.setProperty('oryx-icon' + i, '/v5designer/smartdot/blank.png');
			}
		} else if (nodetype.indexOf('SequenceFlow') > -1) { //line
			var linename = retObject.tmpname || (retObject.tmpiscondition == "yes" && retObject.tmpothercondition != "yes") && retObject.tmpconditiontext || "";
			shape.setProperty('oryx-name', linename);
		} else if (nodetype.indexOf('Parallel') > -1 || nodetype.indexOf('Merger') > -1 || nodetype.indexOf('Extflow') > -1) { //Parallel
			shape.setProperty('oryx-name', retObject.tmpstat);
		} else if (nodetype.indexOf('Template') > -1) {
			shape.setProperty('oryx-name', retObject.tmpname);
			var tmplWidth = retObject.tmpimagesize.split(",")[0];
			var tmplHeight = retObject.tmpimagesize.split(",")[1];
			// 计算高度差
			var heightDiff = tmplHeight - shape.bounds.height();
			var widthDiff = tmplWidth - shape.bounds.width();
			// 设置节点大小
			shape.bounds.extend({
				x: widthDiff,
				y: heightDiff
			});
			// 保证设置大小后中心位置与原来的一样
			shape.bounds.moveBy({
				x: -widthDiff / 2,
				y: 0
			});
			// 设置背景图片
			shape.setProperty('oryx-tmpl_image', "/" + retObject.tmpdbpath + "/0/" + retObject.tmpid + "/$file/flow.png");
		} else {
			return;
		}


		this.that.facade.getCanvas().update();
		this.that.facade.updateSelection();
	}
}