// aboutCompany.js

(function($){


	var win          = $(window);
	var winH         = win.innerHeight();
	var winHPart     = winH / 4 * 3;
	
	win.scrollTop(0);

  var bodyH = $('body').height();
  // console.log(bodyH);
  $('#viewBox').height(bodyH);
  // ---------------------------------------------------------------------------

  var viewBox = $('#viewBox');
  var viewBoxH2 = viewBox.children('h2');
  var viewVideo = viewBox.find('.video');
  var titleBg = $('.title_bg');
  var context = $('.con_text');

  var conBgP = $('.con_img').css('backgroundPositionY');
  var parseCon = parseInt(conBgP);
  console.log(conBgP, parseCon);

  // var htTop = viewBoxH2.offset().top;
  // console.log(htTop);

  $(document).on('scroll', function(){
    var doScroll = $(document).scrollTop();
    viewBoxH2.css({'marginTop':-doScroll/2+'px'});
    viewVideo.css({'marginTop':doScroll*1.2+'px'});

    // console.log(-doScroll/5+'px');
    var ot = -doScroll/3;
    titleBg.css({'marginTop':ot*0.65+'px'});
    titleBg.children('h2').css({'marginTop':ot*0.4+'px'});
    context.css({'marginTop':ot*0.5+'px'});
    context.children('p').css({'marginTop':ot*0.6+'px'});

    $('.con_img_bg').css({'marginTop':ot*1+200+'px'});
    // $('.con_img').css({'backgroundPositionY': parseCon-(ot/15)+'%'});
  });

  // #shortHistory 
  var shortHistory = $('#shortHistory');
  var shortHistoryOffset  = shortHistory.offset().top;
  var hisArea = shortHistory.find('.his_area');
  var hisUl = hisArea.children('ul');
  var hisLi = hisUl.find('li') ;

  hisLi.css({opacity:0});

	
	// li의 offset값을 각각 파악
	var liOffset = []; 
	for( var i=0; i < hisLi.length; i++ ){
		liOffset[i] = hisLi.eq(i).offset().top;
	}
	// console.log(liOffset);

	win.on('scroll', function(){
		var winScroll = $(this).scrollTop();
		var winScrollPlus = winScroll + winHPart;
		var op = 0;

		// shortHistory 위치값파악 후 li값의 위치에따라 투명도 처리
		if(winScrollPlus >= shortHistoryOffset ){
			// li값을 각각 파악하여 매번 순환체크하도록 처리
			for(var i=0; i< hisLi.length; i++){
				if( winScrollPlus  >= liOffset[i]){
					op = (winScrollPlus - liOffset[i]) / 400;
					hisLi.eq(i).css({opacity: op});
				}
			}
		}
	});

  
})(jQuery);