var countersignjs = {
	args : {},
	keys : {},
	values : {},
	createForm : function() {
		var createText = function(){
			return new Ext.form.TextField({hideLabel: true});
		};
		var prop_id_label = new Ext.form.Label({text: '环节编码'});	
		var prop_id = createText();
		var prop_name_label = new Ext.form.Label({text: '环节名称'});	
		var prop_name = createText();
		var prop_mode_label = new Ext.form.Label({text: '会签方式'});
		var prop_mode_v0 = new Ext.form.Radio({boxLabel: '并行', name: 'prop_mode', inputValue: '0', hideLabel: true});
		var prop_mode_v1 = new Ext.form.Radio({boxLabel: '串行', name: 'prop_mode', inputValue: '1', hideLabel: true});
		prop_mode_v0.checked = true;

		var prop_rule_label = new Ext.form.Label({text: '会签规则'});
		var prop_rule_cfg = {  
		        fields:['value','text'],  
		        data:[['0','单票否决'],
		              ['1','无否决多数通过'],
		              ['2','通过多余否决'],
		              ['3','特权'],  
		             ['99','其它']]  
		    }; 	
		var prop_rule_store = new Ext.data.SimpleStore(prop_rule_cfg);
		var prop_rule = new Ext.form.ComboBox({  
		                //id:'prop_rule',  
		                //fieldLabel:'会签规则',  
		                triggerAction:'all',            //单击触发按钮显示全部数据   
		                //设置数据源   
		                store:prop_rule_store,  
		                valueField:'value',              //定义值字段   
		                displayField:'text',        //定义要显示的字段   
		                mode:'local',                   //本地模式   
		                forceSelection:true,           //要求输入的值必须在列表中存在   
		                resizable:true,                //允许改变下拉列表大小   
		                typeAhead:true,                //允许自动选择剩余部分文本   
		                value:'0',                //默认选择的项   
		                handelHeight:10,                //下拉列表中拖动手柄的高度
		                width: 130,
		                hideLabel: true
		            });

		prop_rule.on('select', function(comboBox){
			alert(comboBox.getValue()+'-'+comboBox.getRawValue());
		});

		var prop_assignee_label = new Ext.form.Label({text: '会签发起人'});
		var prop_assignee = createText();
		var prop_assignee_selectbtn = new Ext.Button({text: '选择'});
		var prop_completecondition_label = new Ext.form.Label({text: '结束条件'});
		var prop_completecondition = new Ext.form.TextField({hideLabel: true, width: 60, readOnly: true});
		prop_completecondition.value = 'All';

		var prop_personlist_label = new Ext.form.Label({text: '会签参与人'});
		var prop_personlist = new Ext.form.TextArea({hideLabel: true, width: 270});
		var prop_personlist_selectbtn = new Ext.Button({text: '选择'});

		var prop_subprocess_label = new Ext.form.Label({text: '会签子流程'});
		var prop_subprocess_cm = new Ext.grid.ColumnModel([ 
		       {header : '会签部门', dataIndex : 'dept', sortable: true, width: 120}, 
		       {header : '会签子流程', dataIndex : 'subprocess', width: 150}, 
		       {header : '描述', dataIndex : 'desc', width: 200}  
		      ]);
		var prop_subprocess_data = [ 
		      [ '财务部', '合同会签子流程', '描述' ], 
		      [ '法务部', '合同检查会签子流程', '' ],
			  [ '采购部', '采购流程', '' ] 
		      ];
		var prop_subprocess_ds = new Ext.data.Store({
		  	proxy : new Ext.data.MemoryProxy(prop_subprocess_data),
		  	reader : new Ext.data.ArrayReader({}, 
		  			[ { name : 'dept'	}, 
				  {	name : 'subprocess'}, 
				  {	name : 'desc'} ])
		  	});
		prop_subprocess_ds.load();

		var prop_subprocess = new Ext.grid.GridPanel({
			height: 100,
		  	ds : prop_subprocess_ds,
		  	cm : prop_subprocess_cm,
		  	viewConfig: {
		  		foreFit: true
		  	}
		  });

		var prop_default_formkey_label = new Ext.form.Label({text: '缺省审批表单'});
		var prop_default_formkey = createText();
		prop_default_formkey.width = 270;
		var prop_default_formkey_selectbtn = new Ext.Button({text: '选择'});


		var prop_template_label = new Ext.form.Label({text: '模板设置'});
		var prop_template_cm = new Ext.grid.ColumnModel([ 
		                       {header : '事件处理', dataIndex : 'event', sortable: true, width: 120}, 
		                       {header : '模板', dataIndex : 'template', width: 150}, 
		                       {header : '描述', dataIndex : 'desc', width: 200}  
		                      ]);
		var prop_template_data = [ 
		      [ '通知干系人(邮件)', '合同会签通知样式三', '' ], 
		      [ '通知发起人(短信)', '公司标准短信样式而', '描述' ]
		      ];
		var prop_template_ds = new Ext.data.Store({
		  	proxy : new Ext.data.MemoryProxy(prop_template_data),
		  	reader : new Ext.data.ArrayReader({}, 
		  			[ { name : 'event' }, 
				  {	name : 'template' }, 
				  {	name : 'desc'} ])
		  	});
		prop_template_ds.load();

		var prop_template = new Ext.grid.GridPanel({
			height: 90,
		  	ds : prop_template_ds,
		  	cm : prop_template_cm,
		  	viewConfig: {
		  		foreFit: true
		  	}
		  });

		var prop_memo_label = new Ext.form.Label({text: '描述'});
		var prop_memo = new Ext.form.TextArea({hideLabel: true, width: 470});

		var formCfg = {  
		        title:'标准会签定义',  
		        labelSeparator:'',  
		        //labelWidth:80,  
		        bodyStyle:'padding:5 5 5 5',  
		        frame:true,  
		        height:500,  
		        width:700,  
		        renderTo:'form',  
		        items:[{layout: 'column', 
		        		items: [{columnWidth: .1, layout: 'form', items:[prop_id_label]},
		        		        {columnWidth: .25, layout: 'form', items:[prop_id]},
		        		        {columnWidth: .1, layout: 'form', items:[prop_name_label]},
		        		        {columnWidth: .4, layout: 'form', items:[prop_name]}
		        		        ]},
				        {layout: 'column', 
			        		items: [{columnWidth: .1, layout: 'form', items:[prop_mode_label]},
			        		        {columnWidth: .1, layout: 'form', items:[prop_mode_v0]},
			        		        {columnWidth: .15, layout: 'form', items:[prop_mode_v1]},
			        		        {columnWidth: .1, layout: 'form', items:[prop_rule_label]},
			        		        {columnWidth: .4, layout: 'form', items:[prop_rule]}
			        		        ]},
				        {layout: 'column', 
			        		items: [{columnWidth: .1, layout: 'form', items:[prop_assignee_label]},
			        		        {columnWidth: .2, layout: 'form', items:[prop_assignee]},
			        		        {columnWidth: .15, layout: 'form', items:[prop_assignee_selectbtn]},
			        		        {columnWidth: .1, layout: 'form', items:[prop_completecondition_label]},
			        		        {columnWidth: .2, layout: 'form', items:[prop_completecondition]}
			        		        ]},
				        {layout: 'column', 
				        	items: [{columnWidth: .1, layout: 'form', items:[prop_personlist_label]},
				        	        {columnWidth: .4, layout: 'form', items:[prop_personlist]},
				        	        {columnWidth: .2, layout: 'form', items:[prop_personlist_selectbtn]}
				        	        ]},
				        {layout: 'column', 
				        	items: [{columnWidth: .1, layout: 'form', items:[prop_subprocess_label]},
				        	        {columnWidth: .7, layout: 'form', items:[prop_subprocess]}
				        	        ]},
				        {layout: 'column', 
			        		items: [{columnWidth: .1, layout: 'form', items:[prop_default_formkey_label]},
			        		        {columnWidth: .4, layout: 'form', items:[prop_default_formkey]},
			        		        {columnWidth: .1, layout: 'form', items:[prop_default_formkey_selectbtn]}
			        		        ]},
		    	        {layout: 'column', 
		    	        	items: [{columnWidth: .1, layout: 'form', items:[prop_template_label]},
		    	        	        {columnWidth: .7, layout: 'form', items:[prop_template]}
		    	        	        ]},
				        {layout: 'column', 
			        		items: [{columnWidth: .1, layout: 'form', items:[prop_memo_label]},
			        		        {columnWidth: .7, layout: 'form', items:[prop_memo]}
			        		        ]}
				        	        
			    ],
		        buttons: []
		};
		var form=new Ext.form.FormPanel(formCfg);
		return form;
	},
	initForm : function() {
		// console.log('go into initForm function...');
		args = window.dialogArguments;// IE用法
		if (!args) {
			// fireFox用法
			args = window.parent.dialogArguments;
		}

		countersignjs.createForm();
		keys = args['keys'];
		values = args['values'];

		var s0, s1;
		var edit;
		for ( var i = 0; i < keys.length; i++) {
			s0 = keys[i];
			s1 = 'prop_' + keys[i];
			edit = document.getElementById(s1);
			if (edit) {
				edit.value = values[s0];
				// alert(s1 + ':' + values[s0]);
				// console.log(s1 + ':' + values[s0]);
			} else {
				// alert('not found:' + s1);
			}
		}
		// 特殊属性设置值
		// 会签模式
		document.getElementById('prop_mode_v0').checked = true;
		document.getElementById('prop_mode_v1').checked = false;
		if (values['mode'] !== '0') {
			document.getElementById('prop_mode_v0').checked = false;
			document.getElementById('prop_mode_v1').checked = true;
		}

		// 会签规则
		for ( var i = 0; i < 4; i++) {
			document.getElementById('prop_rule_v' + i.toString()).selected = false;
		}
		document.getElementById('prop_rule_v99').selected = false;
		document.getElementById('prop_rule_v' + values['rule']).selected = true;
	},
	submitf : function() {
		console.log('go into submitf function...');
		var s0, s1;
		var edit;
		for ( var i = 0; i < keys.length; i++) {
			s0 = keys[i];
			s1 = 'prop_' + keys[i];
			edit = document.getElementById(s1);
			if (edit) {
				values[s0] = edit.value;
				// alert(s1 + ':' + values[s0]);
				// console.log(s1 + ':' + values[s0]);
			} else {
				// alert('not found:' + s1);
			}
		}
		// 特殊属性设置值
		// 会签模式
		values['mode'] = '0';
		if (!document.getElementById('prop_mode_v0').checked) {
			values['mode'] = '1';
		}

		// 会签规则
		for ( var i = 0; i < 4; i++) {
			if (document.getElementById('prop_rule_v' + i.toString()).selected) {
				values['rule'] = i.toString();
			}
		}
		if (document.getElementById('prop_rule_v99').selected) {
			values['rule'] = '99';
		}

		window.returnValue = args;
		window.close();
	}
};




window.onload = countersignjs.initForm;
