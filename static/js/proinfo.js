$(function(){
	var mySwiper = new Swiper('.info-swiper .swiper-container',{
		
	})
	
	$('.arrow-left').click(function(){
		mySwiper.swipePrev();
	})
	$('.arrow-right').click(function(){
		mySwiper.swipeNext();
	})
})