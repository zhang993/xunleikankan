$(function(){
	var timer = '';//定时器
	var i = 0;
	
	$('.search_text').focus(function(){
		$(this).attr('value','');
	});
	
//	$('.search_text').blur(function(){
//		$(this).removeClass('search_text');
//	});
		//记录隐藏显示
	$('#history_div').hover(function(){
		$('.hidden_r').show();
	},function(){
		$('.hidden_r').hide();
	});
	//我的收藏下滑限效果
	$('.hidden_m_top span').mouseover(function(){
		$('.hidden_m_top span').removeClass('span_style');
		$(this).addClass('span_style');
	});
	
	//我的收藏隐藏显示
	$('#fav_div').hover(function(){
		$('.hidden_m').show();
	},function(){
		$('.hidden_m').hide();
	});

	//	中间隐藏盒子切换效果
	$('.history').mouseover(function(){
		$('.history_box').show();
		$('.hidden_m_middle').hide();
	});
	$('.update').mouseover(function(){
		$('.history_box').hide();
		$('.hidden_m_middle').show();
//		$('.hidden_m_middle).show();
	});
	
	//轮换图片
	$('.smal_pic li').mouseover(function(){
		clearInterval(timer);
		var backImg = $(this).find('img').attr('backImg');
		var backColor = $(this).find('img').attr('backColor');
		var background = 'url(' + backImg + ') ' + 'no-repeat center ' + backColor;
		$('#focus_background').css({background:background});
		$(this).addClass('hover').siblings().removeClass('hover');
		i = $(this).index();
		$('.focus_title a').eq(i).show().siblings('a').hide();
	});
	
	$('.smal_pic li').mouseout(function(){
		timer = setInterval(move,1000);
	});
		timer = setInterval(move,1000);
	
	function move(){
		if(i>6){
			i = 0;
		}
		var backImg = $('.smal_pic li').eq(i).find('img').attr('backImg');
		var backColor = $('.smal_pic li').eq(i).find('img').attr('backColor');
		var background = 'url(' + backImg + ') '+'no-repeat center ' + backColor;
		$('#focus_background').css({background : background});
		$('.smal_pic li').eq(i).addClass('hover').siblings().removeClass('hover');
		$('.focus_title a').eq(i).show().siblings('a').hide();
		i++;
	}
	
	//轮换右侧全部分类鼠标样式
	
	$('.title a').mouseover(function(){
		$(this).addClass('rank_hover').siblings().removeClass('rank_hover');
	});
	//轮换区域tab切换效果
	
	$('.focusrank p.title a').mouseover(function(){
		var cur = $(this).index();
		$('.focusrank div.content ul').eq(cur).show().siblings('.content ul').hide();
	});
	
	//	图片Hover公共样式
	$('a.pic').hover(function(){
		$(this).addClass('apsc_hover');
	},function(){
		$(this).removeClass('apsc_hover');
	});
	//今日热播左边的切换效果
	$('.hot_box .tabbox a').mouseover(function(){
		$(this).addClass('hot_style').siblings('a').removeClass('hot_style');
		var cur = $(this).index();
		$('.hot_box .hot_left ul').eq(cur).show().siblings('ul').hide();
	});
	
	
	
	
	
	
	
	
});
