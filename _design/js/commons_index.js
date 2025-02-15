// JavaScript Document
$(function(){
	$("#topMn .span").hover(function(){
		$(this).find("div").css("display","block");
	},function(){
		$(this).find("div").css("display","none");
	});
	
	$("#readypage img").click(function(){
		alert("페이지 준비중입니다.");
	});
	
	$(".gameBtn ul li").hover(function(){
		$(this).find("#playtext").css({"background-color":"#ff0","color":"#000"});
	},function(){
		$(this).find("#playtext").css({"background-color":"#000","color":"#aaa"});
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



