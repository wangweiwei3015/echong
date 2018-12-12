window.onload = function() {
	//	alert(document.cookie);
	// user={"phone":1111111111111,"name":"叫姐姐","password":555555}
	//把cookie中的数据拿出来
	var arr = document.cookie.split('=');
//	console.log(document.cookie);
//	console.log(arr[0]);
//	console.log(arr[1]);
//	console.log(arr);
	var json = eval('(' + arr[1] + ')');
//	console.log(json);
//	console.log(json.password);
//	console.log(json.phone);
//	console.log(json.name);
	var oTxt1 = document.getElementById('lo_txt_name');
	var oTxt2 = document.getElementById('lo_txt_pwd');
	var oTxt3 = document.getElementById('lo_txt_phone');
	var oBtn = document.getElementById('lo_btn');
	var lo_s = document.getElementById('lo_shou');
	var lo_p = document.getElementById('lo_p');
	var lo_hide2 = document.getElementsByClassName('lo_hid2')[0];
	var lo_hide1 = document.getElementsByClassName('lo_hid1')[0];
	var vali = document.getElementById('lo_txt_vali');
	var cod = document.getElementById('lo_txt_code');
	var gVali = document.getElementById('get_vali');
	var corr1 = document.getElementById('corr1');
	var corr2 = document.getElementById('corr2');

	oTxt3.onfocus = function() {
		oTxt3.value = '';
	}
	vali.onfocus = function() {
		vali.value = '';
	}
	cod.onfocus = function() {
		cod.value = '';
	}
	gVali.onclick = function() {
		ran = parseInt(Math.random() * 9999 + 1000);
		console.log(ran);
	}
	lo_s.onclick = function() {
		lo_hide2.style.display = "block";
		lo_hide1.style.display = "none";
		var loVali = vali.value;
		var loPhone = oTxt3.value;
		var loCod = cod.value;
		var str = 'get9';
		var arr1 = [0, 0]
		vali.onblur = function() {
			if(vali.value === str) {
				corr1.style.display = "none";
				arr1[0] = 1;
			} else {
				corr1.style.display = "block";
				arr1[0] = 2;
			}
		}
		cod.onblur = function() {
			console.log(ran);
			console.log(cod.value)
			if(ran === parseInt(cod.value)) {
				corr2.style.display = "none";
				arr1[1] = 1;
			} else {
				corr2.style.display = "block";
				arr1[1] = 2;
			}
		}

		oBtn.onclick = function() {
			var num = arr1[0] * arr1[1];
			console.log(num);
			if(num == 0) {
				alert('您未输入完');
			} else if(num == 1 && json.phone == oTxt3.value) {
				alert('登录成功');
			} else {
				alert('您输入不合法');
			}
		}
	}
	lo_p.onclick = function() {
		lo_hide2.style.display = "none";
		lo_hide1.style.display = "block";
	}
	oTxt1.onfocus = function() {
		oTxt1.value = "";
	}
	oTxt2.onfocus = function() {
		oTxt2.value = "";
	}
	oBtn.onclick = function() {
		location.href='http://www.baidu.com';
		var loName = oTxt1.value;
		var loPsd = oTxt2.value;
		console.log(json.phone);
		if((json.name == loName || json.phone == loName) && json.password == loPsd) {
			alert('登录成功');
			window.location="success.html";
		} else if(json.password != loPsd) {
			alert('密码错误');
		} else {
			alert('用户不存在');
		}
	}

}