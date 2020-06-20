// photoBox.js

(function($){
  // start

  // photoThumList
  var photoList = [
    {no: '1', img:'movie_01.png', Pcimg:'movie_01.jpg', link: 'movie_01_info.html', imgNarr : '영화 01', title: '국제수사',  date: '2020', content: 'lorem ...', },
    {no: '2', img:'movie_02.png', Pcimg:'movie_02.jpg', link: 'movie_02_info.html', imgNarr : '영화 02', title: '남산의 부장들', date: '2020.01.22', content: 'lorem ...', },
    {no: '3', img:'movie_03.png', Pcimg:'movie_03.jpg', link: 'movie_03_info.html', imgNarr : '영화 03', title: '퍼펙트 맨', date: '2019.10.02', content: 'lorem ...', },
    {no: '4', img:'movie_04.png', Pcimg:'movie_04.jpg', link: 'movie_04_info.html', imgNarr : '영화 04', title: '봉오동 전투', date: '2019.08.07', content: 'lorem ...', },
    {no: '5', img:'movie_05.png', Pcimg:'movie_05.jpg', link: 'movie_05_info.html', imgNarr : '영화 05', title: '마담 싸이코', date: '2019.06', content: 'lorem ...', },
    {no: '6', img:'movie_06.png', Pcimg:'movie_06.jpg', link: 'movie_06_info.html', imgNarr : '영화 06', title: '미성년',  date: '2019.04.11', content: 'lorem ...', },
    {no: '7', img:'movie_07.png', Pcimg:'movie_07.jpg', link: 'movie_07_info.html', imgNarr : '영화 07', title: '돈',  date: '2019.03.20', content: 'lorem ...', },
    {no: '8', img:'movie_08.png', Pcimg:'movie_08.jpg', link: 'movie_08_info.html', imgNarr : '영화 08', title: '뺑반',  date: '2019.01.30', content: 'lorem ...', }
  ];


  var imgUrl ='../img/photoBox/';

  var photoBox = $('#photoBox');
  var PhotoFrame = photoBox.find('.photo_frame');
  PhotoFrame.append('<ul class="photo_list clearfix"></ul>');
  var PhotoFrameUl = PhotoFrame.children('ul');

  var textEl = function(i){
    var	listEl = '<li>\
            <a href="#">\
              <div class="img_bg"><span class="hidden">'+ photoList[i].imgNarr +'</span></div>\
            </a>\
            </li>';
    return listEl;
  };

  var i=0;
  for(; i<photoList.length; i++){	
    PhotoFrameUl.append( textEl(i) );
    PhotoFrameUl.children('li').eq(i).find('.img_bg').css({
      backgroundImage:'url('+ imgUrl + photoList[i].Pcimg +')',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'50% 50%',
      backgroundSize:'cover'
    })
  }

  // end
})(jQuery);