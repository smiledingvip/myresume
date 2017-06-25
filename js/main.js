$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#1889C5', '#7BAABE', '#91B493'],
		// anchors : [firstPage,secondPage,pthirdPage,fourthPage],
		// menu : '#myMenu',
		navigation : true,
		navigationTooltips : ['首页', '个人信息', '作品项目', '关于我'],
		afterRender : function(){
			$('.section1 h1').hide();
			$('.section1 h1').fadeIn(2000);
		},
		afterLoad: function(anchorLink, index){
			if(index==2){
				$('.section2 h3').fadeIn(2000);
				$('.section2 .information').animate({marginLeft: "0"},1000);
				$('.section2 .introduction .row').eq(0).fadeIn(500);
				$('.section2 .introduction .row').eq(1).delay(500).fadeIn(500);
				$('.section2 .introduction .row').eq(2).delay(1000).fadeIn(500);
				$('.section2 .introduction .row').eq(3).delay(1500).fadeIn(500);
			}
			if(index==3){
				$('.section3 h3').animate({marginTop: '0'},500);
				$('.section3 .action').delay(500).animate({marginLeft: '0'},1000);
				$('.section3 .discribe').delay(500).animate({marginLeft:'0'},1000);
			}
			if(index==4){
				$('.section4 h3').fadeIn(2000);
				$('.section4 p').eq(0).delay(1000).fadeIn(1000);
				$('.section4 p').eq(1).delay(2000).fadeIn(1000);
				$('.section4 p').eq(2).delay(3000).fadeIn(1000);
				$('.section4 p').eq(3).delay(4000).fadeIn(1000);
			}
			
		},
		onLeave: function(index, nextIndex, direction){
			if(index==2){
				$('.section2 h3').fadeOut(2000);
				$('.section2 .information').animate({marginLeft: "-100%"},1000);
				$('.section2 .introduction .row').fadeOut(2000);
			}
			if(index==3){
				$('.section3 h3').animate({marginTop: '-80%'},500);
				$('.section3 .action').animate({marginLeft: '-50%'},1000);
				$('.section3 .discribe').animate({marginLeft:'150%'},1000);
			}
			if(index==4){
				$('.section4 h3').fadeOut(2000);
				$('.section4 p').eq(0).fadeOut(1000);
				$('.section4 p').eq(1).fadeOut(1000);
				$('.section4 p').eq(2).fadeOut(1000);
				$('.section4 p').eq(3).fadeOut(1000);
			}
		}
	});
});