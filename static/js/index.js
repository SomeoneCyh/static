$(function(){
	var mySwiper1 = new Swiper('.index-banner .swiper-container',{
		autoplay : 5000,
		pagination : '.pagination',
		paginationClickable :true,
		loop : true
	})
	
	$('.index-news-list .txt').ellipsis({row:2});
})