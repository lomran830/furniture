$(document).ready(function(){
	"use strict";
		$(".rooms_drop").on("click",function(){
			$(".inspiration").fadeToggle();
			$(".products").fadeOut();
		})
		$(".pro").on("click",function(){
			$(".products").fadeToggle();
			$(".inspiration").fadeOut();
		})
		$("body").niceScroll();

		
		$(" .new .list-unstyled li.active_1").on("click",function(){
			$(".drop").fadeToggle();
			$(".new .list-unstyled li.active_1").toggleClass("alaa");
			$(".new .list-unstyled li.active, .new .list-unstyled li.active_2").removeClass("alaa")
			$(".Shap").fadeOut();
		})
				$(" .new .list-unstyled li.active_2").on("click",function(){
			$(".Shap").fadeToggle();
				$(".new .list-unstyled li.active_2").toggleClass("alaa");
			$(".new .list-unstyled li.active, .new .list-unstyled li.active_1").removeClass("alaa")
			$(".drop").fadeOut();
		})
		$(" .new .list-unstyled li.active").on("click",function(){
			$(".Shap,.drop").hide();
			$(".new .list-unstyled li.active").toggleClass("alaa");
			$(" .new .list-unstyled li.active_1,.new .list-unstyled li.active_2").removeClass("alaa");
		})
		$(" .drop ul li").on("click",function(){
			$(".drop").fadeToggle();
			$('.new .list-unstyled li.active_1').removeClass("alaa")


		})
		$("button.btn").on("click",function(){
		$('.new .list-unstyled li.active').removeClass("alaa")	
		})
	})