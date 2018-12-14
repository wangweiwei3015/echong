window.onload = function() {
	var oBigBox = document.getElementById('box');
	//上半部
	var oTop = document.getElementById('top');
	//左遮罩
	var oLeftMark = document.getElementById('left');
	//右遮罩
	var oRightMark = document.getElementById("right")
	//大图
	var oBig_Box = oTop.getElementsByTagName('li');
	//下半部
	var oBottom = document.getElementById("bottom");
	//小图UL
	var oSmallUl = document.getElementById("small_ul");
	//小图
	var oSmallPic = oBottom.getElementsByTagName("li");
	//				alert(oBig_Box);

	//小图所在的盒子
	var oSmall_Pic = document.getElementById('small_pic');
	//								alert(oSmall_Pic);
	//遮罩
	var oMark = document.getElementById('mark');
	//滑块
	var oFloat = document.getElementById('float_layer');
	//大图所在盒子
	var oBig_Pic = document.getElementById('big_pic');
	//大图
	var oBig_Img = oBig_Pic.getElementsByTagName('img')[0];

	//给遮罩添加移入事件
	oMark.onmouseenter = function() {
		oFloat.style.display = 'block';
		oBig_Pic.style.display = 'block';
	}
	//给遮罩添加移出事件
	oMark.onmouseleave = function() {
		oFloat.style.display = 'none';
		oBig_Pic.style.display = 'none';
	}
	//给遮罩添加移动事件
	oMark.onmousemove = function(evt) {
		var e = evt || window.event;
		//console.log(e.pageX,e.pageY);
		//鼠标的页面坐标值 - 大盒子相对页面的left - 遮罩相对大盒子的left - 滑块宽度的一半
		var left = e.pageX - oTop.offsetLeft - oSmall_Pic.offsetLeft - oFloat.offsetWidth / 2;
		var top = e.pageY - oTop.offsetTop - oSmall_Pic.offsetTop - oFloat.offsetHeight / 2;
		//					console.log(left,top);
		console.log(oTop.offsetLeft);
		//边界
		if(left <= 0) {
			left = 0;
		} else if(left >= oMark.offsetWidth - oFloat.offsetWidth) {
			left = oMark.offsetWidth - oFloat.offsetWidth;
		}
		if(top <= 0) {
			top = 0;
		} else if(top >= oMark.offsetHeight - oFloat.offsetHeight) {
			top = oMark.offsetHeight - oFloat.offsetHeight;
		}
		oFloat.style.left = left + 'px';
		oFloat.style.top = top + 'px';

		//求小图的移动比例
		var pX = left / (oMark.offsetWidth - oFloat.offsetWidth);
		var pY = top / (oMark.offsetHeight - oFloat.offsetHeight);
		console.log(pX, pY);
		//设置大图的坐标值
		oBig_Img.style.left = -pX * (oBig_Img.offsetWidth - oBig_Pic.offsetWidth) + 'px';
		oBig_Img.style.top = -pY * (oBig_Img.offsetHeight - oBig_Pic.offsetHeight) + 'px';
	}
	//设置小图UL的宽
	oSmallUl.style.width = oSmallPic.length * oSmallPic[0].offsetWidth + 50 + 'px';
	//设置控制图片轮播的下标值
	let indexA = 0;
	//改变层级的变量
	let zIndex = 1;
	//计时器变量
	let timer = null;
	slider();
	//给小图添加事件
	for(let i = 0, len = oSmallPic.length; i < len; i++) {
		//移入事件
		oSmallPic[i].onmouseenter = function() {

			sport(this, { opacity: 100 });

		}
		$("#small_ul").find("img").mouseenter(function() {
			$(this).css({
				"border": "1px solid #4c9605"
			})
		}).mouseleave(function() {
			$(this).css({
				"border": "0"
			})
		})
		oSmallPic[i].onmouseleave = function() {
			//移出事件
			if(i != indexA) {
				sport(this, { opacity: 50 });
			}

		}
		//点击事件
		oSmallPic[i].onmouseenter = function() {
			indexA = i;
			slider();
		}
	}

	//轮播函数
	function slider() {
		//大图轮播
		oBig_Box[indexA].style.zIndex = ++zIndex;
		//小图轮播
		if(indexA == 0) {
			sport(oSmallUl, { left: 0 });
		} else if(indexA == oSmallPic.length - 1) {
			sport(oSmallUl, { left: -(oSmallPic.length - 3) * oSmallPic[0].offsetWidth });
		} else {
			sport(oSmallUl, { left: -(indexA - 1) * oSmallPic[0].offsetWidth });
		}
		//初始化小图的透明度
		//所有小图透明度为50
		for(let i = 0, len = oSmallPic.length; i < len; i++) {
			sport(oSmallPic[i], { opacity: 50 })
		}
		//当前小图透明度为100
		sport(oSmallPic[indexA], { opacity: 100 });
	}
}