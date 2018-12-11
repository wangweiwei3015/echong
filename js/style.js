$(function() {
	var div = $(".nav_l1").find("h3");
	var hide = $(".hide").children(".hide1");
	var li = $(".nav1").find("li");
	var h_div = $(".nav2").find("div");

	div.mouseenter(function() {
		num = $(this).index();
		$(hide).eq(num).show().siblings().hide()
	})
	$(".li1").mouseenter(function() {
		$(".nav2").css("display","block");
	}).mouseleave(function(){
		$(".nav2").css("display","none");
	})
	$(".li2").mouseenter(function() {
		$(".zhul").css("display","block");
	}).mouseleave(function(){
		$(".zhul").css("display","none");
		//alert();
	})
	$(".li3").mouseenter(function() {
		$(".wanj").css("display","block");
	}).mouseleave(function(){
		$(".wanj").css("display","none");
		//alert();
	})
	$(".li4").mouseenter(function() {
		$(".baoj").css("display","block");
	}).mouseleave(function(){
		$(".baoj").css("display","none");
		//alert();
	})
	$(".li5").mouseenter(function() {
		$(".shengh").css("display","block");
	}).mouseleave(function(){
		$(".shengh").css("display","none");
		//alert();
	})
	$(".li6").mouseenter(function() {
		$(".meir").css("display","block");
	}).mouseleave(function(){
		$(".meir").css("display","none");
		//alert();
	})
	
	
	$(".lun_side").find("img").mouseenter(function() {
		$(this).animate({ right: 10 }, 300, function() {
			$(this).animate({ right: 0 }, 300)
		});
	})
	$(".time_head").find("a").mouseenter(function() {
		$(this).css({
			"color": "red",
			"font-size": 14,
			"font-weight": 900,
			"border-bottom": "1px solid #f00"
		})

	}).mouseleave(function() {
		$(this).css({
			"color": "#000",
			"font-size": 12,
			"font-weight": 100,
			"border-bottom": 0
		})
	})
	$(".good_con").find("a").find("img").mouseenter(function() {
		//					alert();
		$(this).animate({ top: 65 }, 500, function() {
			$(this).animate({ top: 78 }, 500);
		});
	})

	//	
	$(".m2_nav").find("li").mouseenter(function() {
		$(this).addClass("hov").siblings().removeClass("hov");
		//	alert();
	})

	$(".tl_1").find("img").mouseenter(function() {
		$(this).animate({ right: 10 }, 500, function() {
			$(this).animate({ right: 0 }, 500)
		});

	})
	$(".tr_1").find("img").mouseenter(function() {
		$(this).animate({ right: 10 }, 500, function() {
			$(this).animate({ right: 0 }, 500)
		});
	})
	$(".tr_2").find("img").mouseenter(function() {
		$(this).animate({ right: 10 }, 500, function() {
			$(this).animate({ right: 0 }, 500)
		});
	})
	$(".tb_1").find("img").mouseenter(function() {
		$(this).animate({ right: 10 }, 500, function() {
			$(this).animate({ right: 0 }, 500)
		});
	})
	$(".tb_2").find("img").mouseenter(function() {
		$(this).animate({ right: 10 }, 500, function() {
			$(this).animate({ right: 0 }, 500)
		});
	})
	$(".tb_3").find("img").mouseenter(function() {
		$(this).animate({ right: 10 }, 500, function() {
			$(this).animate({ right: 0 }, 500)
		});
	})
	$(".m2_b").find("img").mouseenter(function() {
		$(this).animate({ opacity: .7 })
		//alert();
	}).mouseleave(function() {
		$(this).animate({ opacity: 1 })
	})
	$(".bottom_1").find("li").mouseenter(function() {
		$(this).animate({})
	})
	$(".tb_3").find("span").click(function() {
		//	console.log(msg.list[i]);
		alert();
	})
	$("#qing").mouseenter(function(){
//		alert();
		$(".place-area_hov").css("display","block");
	}).mouseleave(function(){
		$(".place-area_hov").css("display","none");
	})
	$("#yu").click(function() {
		$(".yuzhong").css("display", "block");
		$(".china").css("display", "none");
	})
	$("#chong").click(function() {
		$(".yuzhong").css("display", "none");
		$(".china").css("display", "block");
	})
	$(".norms_con").find("a").click(function(){
		$(this).addClass("bg").siblings().removeClass("bg");
	})
	$(".yanse").find("a").click(function(){
		$(this).children("span").addClass("bg2").end().siblings().find("span").removeClass("bg2");
	})
		$("#btn_h").click(function(){
		window.location="list.html";
	})
})
	
	function getId(id){
		return document.getElementById(id);
	}
	

	
var box = document.getElementById("box");
var lun = document.getElementsByClassName('lunbo_wrap')[0];
var ul = document.getElementsByClassName("lun_nav")[0];
var olis = document.querySelectorAll(".lun_ol li")
var Lflag = true;
var now = 0; //当前按钮的下标
olis.forEach(function(li, index) {
	li.onmouseenter = function() {
		now = index;
		tab();
	}
})

function next() {
	if(Lflag){
		now++;
		tab();	
	}
}
var timer = setInterval(next, 5000);


//内容切换
function tab() {
	olis.forEach(function(li, index) {
		li.className = "";
	})
	if(now == 9) { //计划向第一张图片切换
		now = 0
		// 把最早拷贝出来的第一张图片显示出来
		// 如果走到了目标点，让ul瞬间设为0（最后一张图片实际上和第一张图片是一样的）
		startMove(ul, { "left": 9 * -770 }, function() {
			ul.style.left = "0px";
		});
	} else {
		startMove(ul, { "left": now * -770 });
	}
	olis[now].className = "checked";	
}


	
$("#login_").click(function() {
	location.href = "login.html";
})
$('#register_').click(function() {
	location.href = "register.html";
})