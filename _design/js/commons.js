// JavaScript Document
$(function(){
	$("#topMn img").hover(function(){
		var nm = $(this).attr("nm");
		$(this).attr("src","../img/menu/on_0"+nm+".jpg");
	},function(){
		var nm = $(this).attr("nm");
		$(this).attr("src","../img/menu/off_0"+nm+".jpg");
	});
	
	$("#topMn .span").hover(function(){
		$(this).find("div").css("display","block");
	},function(){
		$(this).find("div").css("display","none");
	});
	
	$("#readypage img").click(function(){
		alert("페이지 준비중입니다.");
	});
	
	$("#loginBtn").click(function(){
		$(".popupArea").css("display","block");
		$("#joinBox").css("display","none");
		$("#loginBox").css("display","block");
	});
	
	$("#joinBtn").click(function(){
		$(".popupArea").css("display","block");
		$("#loginBox").css("display","none");
		$("#joinBox").css("display","block");
	});
	
	$("#loginBox > span").click(function(){
		$(".popupArea").css("display","none");
	});
	
	$("#gnb_open").click(function(){
		$("#topMn").css("display","block");
	});
	
	$("#mback").click(function(){
		$("#topMn").css("display","none");
	});
	
	
	
	$('.langArea font').click(function() {
		var cond = $(this).attr("cond");
		if(!cond || cond == "off"){
            $('.langArea div').slideDown();
			$(this).attr("cond","on");
		}else if(cond == "on"){
			$('.langArea div').css('display','none');
			$(this).attr("cond","off");
		}
    });
});