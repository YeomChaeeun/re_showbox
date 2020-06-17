// main_filmBox.js

(function($){
  // start
  var filmList = [
    {no: '1', img:'movie_01.png', Pcimg:'movie_01.jpg', link: 'movie_01_info.html', imgNarr : '영화 01',title: 'movie_01', date: '2020.02.22', content: 'lorem ...', },
    {no: '2', img:'movie_02.png', Pcimg:'movie_02.jpg', link: 'movie_02_info.html', imgNarr : '영화 02',title: 'movie_02', date: '2020.02.22', content: 'lorem ...', },
    {no: '3', img:'movie_03.png', Pcimg:'movie_03.jpg', link: 'movie_03_info.html', imgNarr : '영화 03',title: 'movie_03', date: '2020.02.22', content: 'lorem ...', },
    {no: '4', img:'movie_04.png', Pcimg:'movie_04.jpg', link: 'movie_04_info.html', imgNarr : '영화 04',title: 'movie_04', date: '2020.02.22', content: 'lorem ...', },
    {no: '5', img:'movie_05.png', Pcimg:'movie_05.jpg', link: 'movie_05_info.html', imgNarr : '영화 05',title: 'movie_05', date: '2020.02.22', content: 'lorem ...', },
    {no: '6', img:'movie_06.png', Pcimg:'movie_06.jpg', link: 'movie_06_info.html', imgNarr : '영화 06',title: 'movie_06', date: '2020.02.22', content: 'lorem ...', },
    {no: '7', img:'movie_07.png', Pcimg:'movie_07.jpg', link: 'movie_07_info.html', imgNarr : '영화 07',title: 'movie_07', date: '2020.02.22', content: 'lorem ...', },
    {no: '8', img:'movie_08.png', Pcimg:'movie_08.jpg', link: 'movie_08_info.html', imgNarr : '영화 08',title: 'movie_08', date: '2020.02.22', content: 'lorem ...', }
  ];

  var imgUrl ='../../img/film_poster/';

  var filmBox = $('#filmBox');
  var filmArea = filmBox.find('.film_area');
  filmArea.append('<ul class="film_list clearfix"></ul>');
  var filmAreaUl = filmArea.children('ul');

  var textEl = function(i){
    var	listEl = '<li>\
            <a href="#">\
              <div class="img_bg"><span class="hidden">'+ filmList[i].imgNarr +'</span></div>\
              <dl><dt>'+ filmList[i].title +'</dt>\
                <dd>'+ filmList[i].content +'</dd>\
              </dl>\
            </a>\
            </li>';
    return listEl;
  };

  var i=0;
  for(; i<filmList.length; i++){	
    filmAreaUl.append( textEl(i) );
    filmAreaUl.children('li').eq(i).find('.img_bg').css({
                                backgroundImage:'url('+ imgUrl +filmList[i].img +')',
                                backgroundRepeat:'no-repeat',
                                backgroundPosition:'50% 50%',
                                backgroundSize:'cover'
                              })
  }

  // end
})(jQuery);