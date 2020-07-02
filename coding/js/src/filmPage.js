// filmPage.js
var filmpageList;

(function($){

  $.ajax({
    url:'../data/ajaxFilmPage.json',
    dataType:'json',
    async:false,
    success:function(data){
      filmpageList=data;
      return filmpageList;
    }
  });

  // url에서 filmIndex, filmTitle값 가져오기
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('_&&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
  };


  

  var filmIndex = getUrlParameter('filmIndex');
  var filmTitle = getUrlParameter('filmTitle');
  // console.log(filmIndex, filmTitle);
  var filmListNo = filmIndex-1;


  var detailBox = $('#detailBox');
  var h3P = detailBox.children('.detail_area').find('h3').children('p');
  var infoText = detailBox.find('.info_text');
  var infoTextTitle = infoText.find('h4');
  var infoTextDate = infoText.find('p').eq(0);
  var infoTextContent = infoText.find('p').eq(1);

  h3P.text(filmList[filmListNo].title);
  infoTextTitle.text(filmList[filmListNo].title);
  infoTextDate.text(filmList[filmListNo].date);
  infoTextContent.html(filmList[filmListNo].content);

  var posterImg = detailBox.find('.poster_img');
  var ImgUrl = '../img/movie_poster/';
  posterImg.css({
    backgroundImage:'url('+ ImgUrl + filmList[filmListNo].Pcimg +')',
    backgroundPosition:'50% 50%',
    backgroundRepeat:'no-repeat',
    backgroundSize:'contain'
  });

  var imgList = [filmpageList[filmListNo].thum01,filmpageList[filmListNo].thum02,filmpageList[filmListNo].thum03];
  // var imgList = [filmList[filmListNo].still01,filmList[filmListNo].still02,filmList[filmListNo].still03];
  var filmPhoto = detailBox.find('.film_photo');
  var filmPhotoUl = filmPhoto.find('ul');
  var filmPhotoLi = filmPhotoUl.find('li');

  // filmPhotoUl.css({width:'100%'});
  // filmPhotoLi.css({width:100/imgLen+'%'});
  var imgLen = imgList.length;
  var thumUrl = '../img/filmpage/'+(filmListNo+1)+'/';

  for(var i=0; i<imgLen;i++){
    filmPhotoLi.eq(i).css({
      backgroundImage:'url('+thumUrl+imgList[i]+')',
      backgroundSize:'100%',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'50% 50%'
    });
  }


  var videoUrl = '../media/video/';
  var filmVideo = detailBox.find('.film_video');
  var videoText = 
  '<video controls loop muted>\
    <!--<source  src="../media/video/video_01.webm" type="video/webm"/>-->\
    <source  src="'+videoUrl+filmpageList[filmListNo].video+'" type="video/mp4" />\
    <p>사용하고 계신 브라우저는 멀티미디어 호환이 되지 않으니 <a href="http://google.com/chrome">최신브라우저</a>를 설치하여 사용하세요.</p>      \
  </video>';

  filmVideo.append(videoText);

	var win          = $(window);
	var winH         = win.innerHeight();
	var winHPart     = winH / 4 * 3;
	
  win.scrollTop(0);

  var viewBox = $('#viewBox');
  var viewImg = viewBox.find('.title_img').children('.img');
  viewImg.css({
    backgroundImage:'url('+ thumUrl + filmpageList[filmListNo].thum01 +')',
    backgroundPosition:'50% 50%',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
  })


  $(document).on('scroll', function(){
    var doScroll = $(document).scrollTop();
    viewImg.css({'marginTop':doScroll*1.0+'px'});

  });

})(jQuery);
