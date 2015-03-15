if (!SMARTDOT){
	var SMARTDOT = {};
}
if (!SMARTDOT.FLOWDESIGNER){
	SMARTDOT.FLOWDESIGNER = {};
}

// 自定义样式
SMARTDOT.FLOWDESIGNER.defaultStyle = {
	stepInterval:1000,		// 流程播放步骤间隔
	animateDuration:300,	// 动画持续时间
	node:{
		reached:{			// 流转过的节点样式
			"stroke" : "#2FBF69",	// 边框颜色
			"stroke-width" : 3,		// 边框宽度
			"fill":"white",			// 填充颜色
			"fill-opacity":0		// 填充透明度
		},
		current:{			// 当前节点样式
			"stroke" : "#2f69bf",
			"stroke-width" : 3,
			"fill":"white",
			"fill-opacity":0
		}
	},
	line:{
		reached:{			// 流转过的连线样式
			"stroke" : "#2FBF69",				// 连线颜色
			"stroke-width":3,					// 连线宽度
			"arrow-end" : "classic-wide-long"	// 箭头样式
		},
		current:{			// 当前连线样式
			"stroke" : "#2f69bf",
			"stroke-width":3,
			"arrow-end" : "classic-wide-long"
		}
	}
};

// 沟通图样式
SMARTDOT.FLOWDESIGNER.defaultStyleGt = {
	animateDuration:300,	// 动画持续时间
	node:{
		width: 120,		// 节点宽度
		height: 40,		// 节点高度
		levelDistance: 50,		// 层次的间距
        subtreeOffset: 10,		// 子树的间距
        siblingOffset: 15,  		// 节点间距
        indent:0,  			// 与上级节点的缩进
		"font-size": 12,
		finish:{			// 已反馈的节点样式
			"stroke" : "#2FBF69",	// 边框颜色
			"stroke-width" : 3		// 边框宽度
		},
		current:{			// 当前节点样式
			"stroke" : "#2f69bf",
			"stroke-width" : 3
		},
		wait:{			// 一般节点样式
			"stroke" : "#000000",
			"stroke-width" : 1
		},
		stop:{			// 终止节点样式
			"stroke" : "#aaaaaa",
			"stroke-width" : 1
		}
	},
	line:{
		finish:{			// 已反馈的连线样式
			"stroke" : "#2FBF69",				// 连线颜色
			"stroke-width":1					// 连线宽度
		},
		current:{			// 当前连线样式
			"stroke" : "#2f69bf",
			"stroke-width" : 1
		},
		wait:{			// 一般连线样式
			"stroke" : "#000000",
			"stroke-width":1
		},
		stop:{			// 终止连线样式
			"stroke" : "#aaaaaa",
			"stroke-width" : 1
		}
	}
};

// 嵌入式沟通图样式
SMARTDOT.FLOWDESIGNER.defaultStyleGtMini = {
	animateDuration:300,	// 动画持续时间
	node:{
		width: 120,		// 节点宽度
		height: 30,		// 节点高度
		levelDistance: 30,		// 层次的间距
        subtreeOffset: 8,		// 子树的间距
        siblingOffset: 5,  		// 节点间距
        indent:0,  			// 与上级节点的缩进
		"font-size": 12,
		finish:{			// 已反馈的节点样式
			"stroke" : "#2FBF69",	// 边框颜色
			"stroke-width" : 2		// 边框宽度
		},
		current:{			// 当前节点样式
			"stroke" : "#2f69bf",
			"stroke-width" : 2
		},
		wait:{			// 一般节点样式
			"stroke" : "#000000",
			"stroke-width" : 1
		},
		stop:{			// 终止节点样式
			"stroke" : "#aaaaaa",
			"stroke-width" : 1
		}
	},
	line:{
		finish:{			// 已反馈的连线样式
			"stroke" : "#2FBF69",				// 连线颜色
			"stroke-width":1					// 连线宽度
		},
		current:{			// 当前连线样式
			"stroke" : "#2f69bf",
			"stroke-width" : 1
		},
		wait:{			// 一般连线样式
			"stroke" : "#000000",
			"stroke-width":1
		},
		stop:{			// 终止连线样式
			"stroke" : "#aaaaaa",
			"stroke-width" : 1
		}
	}
};