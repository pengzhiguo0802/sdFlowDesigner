var taskjs = {
	args : {},
	keys : {},
	values : {},
	
	prop_performer_type_enum : ['assignee', 'candidateUsers', 'candidateGroups'],
	
	initForm : function() {
		// console.log('go into initForm function...');
		args = window.dialogArguments;// IE用法
		if (!args) {
			// fireFox用法
			args = window.parent.dialogArguments;
		}

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
				alert('not found:' + s1);
			}
		}
		// 特殊属性设置值
		var prop_performer_type_enum = ['assignee', 'candidateUsers', 'candidateGroups'];
		// 执行者类型
		var t = -1;
		var c = prop_performer_type_enum.length;
		for ( var i = 0; i < c; i++) {
			document.getElementById('prop_performer_type_v' + i.toString()).selected = false;
			if (prop_performer_type_enum[i] === values['performer_type']){
				t = i;
			}
		}
		
		if (t !== -1){
			document.getElementById('prop_performer_type_v' + t.toString()).selected = true;
		}
		
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
				//alert('not found:' + s1);
			}
		}
		
		// 特殊属性设置值
		var prop_performer_type_enum = ['assignee', 'candidateUsers', 'candidateGroups'];
		// 执行者类型
		var c = prop_performer_type_enum.length;
		for ( var i = 0; i < c; i++) {
			if (document.getElementById('prop_performer_type_v' + i.toString()).selected) {
				values['performer_type'] = prop_performer_type_enum[i];
			}
		}
		
		window.returnValue = args;
		window.close();
	}
};

window.onload = taskjs.initForm;

