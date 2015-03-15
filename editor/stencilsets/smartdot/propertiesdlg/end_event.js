var end_eventjs = {
	args : {},
	keys : {},
	values : {},
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
				alert('not found:' + s1);
			}
		}
		window.returnValue = args;
		window.close();
	}
};

window.onload = end_eventjs.initForm;

