window.onload = function() {
	var oBtn = document.getElementById('re_btn');
	oBtn2 = document.getElementById('re_lo');
	oBtn1 = document.getElementById('btn1');
	var oTxt1 = document.getElementById('txt_phone');
	var oTxt2 = document.getElementById('txt_name');
	var oTxt3 = document.getElementById('txt_pwd');
	var oTxt4 = document.getElementById('txt_rpwd');
	var oSpan = document.getElementsByTagName('span');
	var code = document.getElementById('get_code');
	var oTxt5 = document.getElementById('txt_msg');
	var oTxt6 = document.getElementById('txt_vali');
	var arr = [0, 0, 0, 0, 0, 0];
	var bTure = false;
	oBtn2.onclick = function() {
		location.href = 'login.html';
	}
	oTxt1.onfocus = function() {
		oTxt1.value = "";
	}
	oTxt2.onfocus = function() {
		oTxt2.value = "";
	}
	oTxt3.onfocus = function() {
		oTxt3.value = "";
	}
	oTxt4.onfocus = function() {
		oTxt4.value = "";
	}
	oTxt5.onfocus = function() {
		oTxt5.value = "";
	}
	oTxt6.onfocus = function() {
		oTxt6.value = "";
	}
	oTxt1.onblur = function() {
		rePhone = oTxt1.value;
		var re = /^[0-9]{11}$/;
		if(!re.test(rePhone)) {
			
			oSpan[0].style.display = 'inline-block';
			arr[0] = 2;
		} else {
			oSpan[0].style.display = 'none';
			arr[0] = 1;
		}
	}
	oTxt2.onblur = function() {
		reName = oTxt2.value;
		//console.log(reName);
		var re = /^[\u4e00-\u9fa5]{4,20}$/;
		if(!re.test(reName)) {
			//alert('只限2至3位的中文');
			oSpan[1].style.display = 'inline-block';
			arr[1] = 2;
		} else {
			oSpan[1].style.display = 'none';
			arr[1] = 1;
		}
	}
	oTxt3.onblur = function() {
		rePsd = oTxt3.value;
		//console.log(rePsd);
		var re = /^[0-9]{6,20}$/;
		if(!re.test(rePsd)) {
			oSpan[2].style.display = 'inline-block';
			arr[2] = 2;
		} else {
			oSpan[2].style.display = 'none';
			arr[2] = 1;
		}
	}
	oTxt4.onblur = function() {
		rePsd1 = oTxt4.value;
		//console.log(rePsd1);
		if(rePsd !== rePsd1) {
			oSpan[3].style.display = 'inline-block';
			arr[3] = 2;
		} else {
			oSpan[3].style.display = 'none';
			arr[3] = 1;
		}
	}
	code.onclick = function() {
		var randNum = parseInt(Math.random() * 9999 + 1000);
		console.log(randNum);
		oTxt5.onblur = function() {
			var oRand = parseInt(oTxt5.value);
			var va = document.getElementById('va');
			//		console.log(oRand);
			//		console.log(randNum);
			if(oRand != randNum) {
				va.style.display = 'inline-block';
				arr[4] = 2;

			} else {
				va.style.display = 'none';
				arr[4] = 1;
			}

		}
	}

	oTxt6.onblur = function() {
		var vImg = oTxt6.value;
		var va2 = document.getElementById('va2');
		var str = 'sxmn';
		console.log(vImg);
		if(str === vImg) {
			va2.style.display = 'none';
			arr[5] = 1;
		} else {
			va2.style.display = 'inline-block';
			arr[5] = 2;
		}
	}
	oBtn.onclick = function() {
		var rePhone = oTxt1.value;
		var reName = oTxt2.value;
		var rePsd = oTxt3.value;
		var rePsd1 = oTxt4.value;
		//把数据放入cookie中
		var date = new Date();
		date.setDate(date.getDate() + 3000);
		//{"rephone":11111111111,"name":"叫姐姐","password":2323}
		//'{"phone":'+11111111111+',"name":'"+叫姐姐+'","password":' +2323+'}';
		document.cookie = "user=" + '{"phone":' + rePhone + ',"name":"' + reName + '","password":' + rePsd + '}' + ';expires=' + date + ";path=/";
		var num = arr[0] * arr[1] * arr[2] * arr[3] * arr[4] * arr[5];
		console.log(num);
		if(num == 0) {
			alert("您未输入完");
		} else if(num == 1) {
			oBtn2.style.background = "red";
			alert("注册成功");
			location.href = 'login.html';
		} else {
			alert("您输入不合法");
		}
	}

}