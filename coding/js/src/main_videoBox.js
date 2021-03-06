// main_videoBox.js

(function($){
  // start

  var videoInfo = {
    title:'남산의 부장들', 
    content:'흔들린 충성, 그날의 총선',
    videoNarr:'lorem...', 
    mp4:'../media/video/2nd_movie_preview.mp4', 
    thum:'../img/movieBox/movie_thum.jpg'
  };

  var videoBox = $('#videoBox');
  var moviePlay = videoBox.find('.movie_play');
  var bigModalText = '<div class="big_modal">\
            <div class="big_movie">\
              <div class="video_info"><span class="hidden">'+videoInfo.videoNarr+'</span></div>\
              <video controls loop muted>\
                <!--<source  src="../media/video/video_01.webm" type="video/webm"/>-->\
                <source  src="' + videoInfo.mp4 + '"type="video/mp4" />\
                <p>사용하고 계신 브라우저는 멀티미디어 호환이 되지 않으니 <a href="http://google.com/chrome">최신브라우저</a>를 설치하여 사용하세요.</p>      \
              </video>\
              <div class="close_btn"><button type="button"><span class="hidden">닫기</span></button></div>\
            </div>\
            <div class="big_bg"></div></div>';

  videoBox.append(bigModalText);
  moviePlay.find('.movie_info').children('h3').text(videoInfo.title);
  moviePlay.find('.movie_info').children('p').text(videoInfo.content);

  var bigModal = videoBox.children('.big_modal');
  var bigModalBtn = bigModal.find('.close_btn');
  var movieBox = bigModal.find('.big_movie');
  var bigBg = bigModal.find('.big_bg');

  var MoviePlayThum = videoBox.find('.movie_play');

  MoviePlayThum.on('click',function(){
    bigModal.fadeIn(function(){
      $(window).on('keyup',function(evt){
        var keyCode = evt.keyCode;
        // console.log(keyCode);
        // 빠져나가기27
        if(keyCode ===27){
          bigModal.fadeOut(400,function(){});
        }
      });
    });
  });
  
  bigModalBtn.on('click',function(e){
    e.preventDefault();
    bigModal.fadeOut();
  });

  bigBg.on('click',function(){
    bigModal.fadeOut();
  });


  // parallax
  var win = $(window);
  var winW = win.innerWidth();
  var winH = win.height();
  var videoH = videoBox.outerHeight();
  var videoOffset = videoBox.offset().top;
  var videoPositionY = videoBox.find('.movie_play').css('background-position');
  console.log(videoPositionY);


  win.on('scroll',function(e){
    e.preventDefault();
    var winTop = win.scrollTop();
    var winTop2 = winTop + winH;
    if(winTop2>videoOffset && winTop2<=videoOffset+videoH){
      // console.log('!!!!!!! ------------------------1'+(videoOffset-winTop2)/20);
      var pY = -(videoOffset-winTop2)/20*3;
      // console.log(pY);
      if(pY>=60){pY=60;}
      MoviePlayThum.css({backgroundPositionY: pY+'%'});
    }
  });

  

  // end
})(jQuery);