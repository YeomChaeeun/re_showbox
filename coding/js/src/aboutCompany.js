// aboutCompany.js

(function($){

var bodyH = $('body').height();
// console.log(bodyH);
$('#viewBox').height(bodyH);
// ---------------------------------------------------------------------------

var viewBox = $('#viewBox');
var viewBoxH2 = viewBox.children('h2');
var viewVideo = viewBox.find('.video');
var titleBg = $('.title_bg');

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

  $('.con_img').css({'backgroundPositionY': parseCon-(ot/15)+'%'});
});



  
})(jQuery);