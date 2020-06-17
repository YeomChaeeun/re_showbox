// main.js

(function($){
  // start

  var viewBox = $('#viewBox');
  var slideBtn = viewBox.children('.slide_btn').find('button');

  var viewFilm = viewBox.children('.view_film');
  var viewFilmWrap = viewFilm.children('.view_film_wrap');
  var viewFilmLi = viewFilmWrap.find('li');

  var viewBannerBg = $('.viewBanner_bg');
  var viewBannerBgUl = viewBannerBg.find('ul');
  var viewBannerBgLi = viewBannerBgUl.find('li');

  var indicator = viewBox.children('.indicator');
  var indiTitle = indicator.children('.indi_title');
  var indiTitleLi = indiTitle.find('li');

  //common

  var timed = 600;
  var n=0;
  var btnOk = true;
  var k;
  
  var Url = '../../html/movie/';
  var MainfilmList = [
    {no: '1', img:'movie_01.png', Pcimg:'movie_01.jpg', title: 'movie_01', content: 'lorem ...', link: 'movie_01_info.html'},
    {no: '2', img:'movie_02.png', Pcimg:'movie_02.jpg', title: 'movie_02', content: 'lorem ...', link: 'movie_02_info.html'},
    {no: '3', img:'movie_03.png', Pcimg:'movie_03.jpg', title: 'movie_03', content: 'lorem ...', link: 'movie_03_info.html'},
    {no: '4', img:'movie_04.png', Pcimg:'movie_04.jpg', title: 'movie_04', content: 'lorem ...', link: 'movie_04_info.html'},
    {no: '5', img:'movie_05.png', Pcimg:'movie_05.jpg', title: 'movie_05', content: 'lorem ...', link: 'movie_05_info.html'},
    {no: '6', img:'movie_06.png', Pcimg:'movie_06.jpg', title: 'movie_06', content: 'lorem ...', link: 'movie_06_info.html'},
    {no: '7', img:'movie_07.png', Pcimg:'movie_07.jpg', title: 'movie_07', content: 'lorem ...', link: 'movie_07_info.html'},
    {no: '8', img:'movie_08.png', Pcimg:'movie_08.jpg', title: 'movie_08', content: 'lorem ...', link: 'movie_08_info.html'}
  ];

  // list clone
  var liLast = viewFilmLi.eq(-1).clone(true);
  viewFilmWrap.prepend(liLast);

  viewFilmLi = viewFilmWrap.find('li');
  var viewFilmLiLen = viewFilmLi.length;
  console.log(viewFilmLiLen);

  var liWidth = 100/viewFilmLiLen;
  viewFilmWrap.css({width:viewFilmLiLen*100+'%',transform:'translateX(-' + liWidth + '%)'});
  viewFilmLi.css({width:liWidth+'%'});

  // title, content text
  viewBannerBgLi.eq(n).show();
  viewBannerBgLi.eq(n).addClass('active');

  var ViewBannerTextFn = function(n,k){
    if(k!==n){
      viewBannerBgLi.eq(n).css({zIndex:5});
      viewBannerBgLi.eq(k).fadeOut(100,function(){
        viewBannerBgLi.eq(n).fadeIn();
        viewBannerBgLi.removeClass('active');
        $(this).addClass('active');
      });
    }
  };

  //button
  slideBtn.on('click',function(e){
    e.preventDefault();
    var clickIt = $(this)[0];
    k = n;
    if(clickIt == $('.next')[0]){
      // 다음 버튼 클릭
      btnOk = false;
      n+=1;
      ViewBannerTextFn(n,k);
      
      viewFilmWrap.stop().animate({marginLeft: n*-100 + '%'}, function(){
        if(n>=viewFilmLiLen-2){
          n = -1;
          viewFilmWrap.css({marginLeft: n*-100 + '%'});
        }
        btnOk = true;
      });
    }else if(btnOk){
      // 이전 버튼 클릭
      btnOk = false;
      n-=1;
      ViewBannerTextFn(n,k);

      viewFilmWrap.stop().animate({marginLeft: n*-100 + '%'}, function(){
        if(n<0){
          n=viewFilmLiLen-2;
          viewFilmWrap.css({marginLeft: n*-100 + '%'});
        }
        btnOk = true;
      }); 
    }
  });
  
  // indicator title
  var mvLength = 2; 
  var indiLast = indiTitleLi.eq(-1*(mvLength+1)).nextAll('li');
  indiTitle.prepend(indiLast);
  indiTitleLi = indiTitle.find('li');
  indiTitle.css({width:250+'%'});

  var inditFirstSize = indiTitleLi.eq(1).outerWidth(true)*(mvLength-1);
  indiTitle.css({marginLeft:-inditFirstSize+'px'});
  indiTitle.css({position:'relative'});












  // end
})(jQuery);