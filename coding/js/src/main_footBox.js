// main_footBox.js



(function($){
  // start
	var win = $(window);
	var winH = win.height();

	var wrap = $('#wrap');
	wrap.height(winH);

	// ---------------------------
	var footBox = $('#footBox');
	footBox.wrap('<div class="footBox_wrap"></div>');

	var footBoxWrap = footBox.parent('div');
	var footBoxH = footBox.css('height');
  var footBoxBg = footBox.css('backgroundColor');
  
	footBoxWrap.css({
		width:'100%', height:footBoxH, backgroundColor:footBoxBg
	});

  footBox.append('<div class="foot_area"></div>');
  var footArea = $('.foot_area');

  var footText = '<div class="foot_logo full"><a href="#"><span class="hidden">footer logo</span></a></div>\
                  <div class="fnb">\
                  <ul><li><a href="#">회사소개</a></li><li><a href="#">오시는길</a></li></ul>\
                  </div>\
                  <div class="copyright">COPYRIGHTⓒALL RIGHTS RESERVEDCOPYRIGHTⓒALL RIGHTS RESERVED</div>';

  footArea.append(footText);
  
  // var footLogo = footArea.find('.foot_logo');
  // var footFnb = footArea.find('.fnb');
  
  // end
})(jQuery);