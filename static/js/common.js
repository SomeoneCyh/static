$(function(){
	var _isShow = true;
	resize();
	scroll();
	
	$(window).resize(function() { 
		resize();
	});
	
	$(window).scroll(function(){
		scroll();
	})
	
	function scroll(){
		var s=$(window).scrollTop();
		if(s<=100 && $(window).height()>=($('.footer').offset().top+360)){
        }
        else if(s>100){
            $(".return-top").fadeIn(100);
        }else{
            $(".return-top").fadeOut(200);
        }
        if($('.footer').length && s > ($('.footer').offset().top - $(window).height())){
            $(".return-top").addClass('bottom');
        }else{
        	$(".return-top").removeClass('bottom');
        }
	}
	
	function resize(){		
		$('.return-top').css({left:($(window).width()-1300)/2+1300+20})
	}
	
	$(".return-top").click(function(){
        $("html,body").animate({scrollTop:0},700)
    });
        
})
