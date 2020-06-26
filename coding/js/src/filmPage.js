// filmPage.js

(function($){

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
  console.log(filmIndex, filmTitle);

  var filmListNo = filmIndex-1;
  var detailBox = $('#detailBox');
  var posterImg = detailBox.find('.poster_img');
  var ImgUrl = '../img/movie_poster/';

  posterImg.css({
    backgroundImage:'url('+ ImgUrl + filmList[filmListNo].Pcimg +')',
    backgroundPosition:'50% 50%',
    backgroundRepeat:'no-repeat',
    backgroundSize:'100%'
  });


  



})(jQuery);
