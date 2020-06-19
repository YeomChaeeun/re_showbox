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
  
  var Url = '../img/viewBox/';
  var MainfilmList = [
    {no: '1', img:'main_01.png', Pcimg:'main_01.jpg', title: '국제수사', content: '대한민국 촌구석 형사, 글로벌 범죄에 휘말렸다!<br/>“나 코리안 폴리스여!”<br/>동네급 형사의 국제급 수사가 시작된다!', link: 'movie_01_info.html'},
    {no: '2', img:'main_02.png', Pcimg:'main_02.jpg', title: '남산의 부장들', content: 'lorem ...', link: 'movie_02_info.html'},
    {no: '3', img:'main_03.png', Pcimg:'main_03.jpg', title: '퍼펙트 맨', content: 'lorem ...', link: 'movie_03_info.html'},
    {no: '4', img:'main_04.png', Pcimg:'main_04.jpg', title: '봉오동 전투', content: 'lorem ...', link: 'movie_04_info.html'},
    {no: '5', img:'main_05.png', Pcimg:'main_05.jpg', title: '마담 싸이코', content: 'lorem ...', link: 'movie_05_info.html'},
    {no: '6', img:'main_06.png', Pcimg:'main_06.jpg', title: '미성년', content: 'lorem ...', link: 'movie_06_info.html'},
    {no: '7', img:'main_07.png', Pcimg:'main_07.jpg', title: '돈', content: 'lorem ...', link: 'movie_07_info.html'},
    {no: '8', img:'main_08.png', Pcimg:'main_08.jpg', title: '뺑반', content: 'lorem ...', link: 'movie_08_info.html'}
  ];



  // 배열 이미지 담기
  var i=0;
  for(; i<MainfilmList.length; i++){	

    indiTitleLi.eq(i).find('a').text(MainfilmList[i].title);
    viewBannerBgLi.eq(i).html(MainfilmList[i].content);
    viewFilmLi.eq(i).css({
      backgroundImage:'url('+ Url + MainfilmList[i].Pcimg +')',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'50% 0',
      backgroundSize:'cover'
    })
  }


  
  // indicator title
  var mvLength = 3; 
  var indiLast = indiTitleLi.eq(-1*(mvLength+1)).nextAll('li');
  indiTitle.prepend(indiLast);
  indiTitleLi = indiTitle.find('li');
  var indiTitleLiLen = indiTitleLi.length;
  indiTitle.css({width:280+'%'});
  // console.log(indiTitleLiLen);

  var inditFirstSize = indiTitleLi.eq(1).outerWidth(true)*(mvLength-1);
  indiTitleLi.css({width:100/indiTitleLiLen+'%'});
  indiTitle.css({marginLeft:-inditFirstSize-(inditFirstSize/26)+'px'});
  indiTitle.css({position:'relative'});

  indiTitleLi.find('a').on('click',function(e){
    e.preventDefault();
    if(btnOk){
      var clickIt = $(this).parent('li');
      var itIndex = clickIt.index();
      indiN = itIndex;
      k = n;
      // console.log(vn,vk);
      if(indiN<3){
        // 이전 인디케이터 
        btnOk = false;
        n-=1;
        ViewBannerTextFn(n,k);

        viewFilmWrap.stop().animate({left: 100 + '%'}, function(){
          if(n<0){
            n=viewFilmLiLen-1;
          }
          viewFilmLi.eq(-1*(mvLength-1)).nextAll('li').prependTo(viewFilmWrap);
          viewFilmWrap.css({left:0});
          viewFilmLi = viewFilmWrap.find('li');
          
          indiTitle.animate({left:inditFirstSize/2+'px'},function(){
            indiTitleLi.eq(-1*(mvLength-1)).nextAll('li').prependTo(indiTitle);
            indiTitle.css({left:0});
            indiTitleLi = indiTitle.find('li');
          });  
          indiTitleLi.eq(mvLength-1).addClass('active');
          btnOk = true;
        });
      }else if(indiN==3){
        btnOk = false;
        viewFilmWrap.stop().animate({left: 0}, function(){
          btnOk = true;
        });

      }else if(indiN>3){
        // 이후 인디케이터 
        btnOk = false;
        n+=1;
        ViewBannerTextFn(n,k);

        viewFilmWrap.stop().animate({left: -100 + '%'}, function(){
          if(n>=viewFilmLiLen-1){
            n = -1;
          }
          viewFilmLi.eq(mvLength-2).prevAll('li').appendTo(viewFilmWrap);
          viewFilmWrap.css({left:0});
          viewFilmLi = viewFilmWrap.find('li');
  
          indiTitle.animate({left:-inditFirstSize/2+'px'},function(){
            indiTitleLi.eq(mvLength-2).prevAll('li').appendTo(indiTitle);
            indiTitle.css({left:0});
            indiTitleLi = indiTitle.find('li');
          });
          indiTitleLi.eq(mvLength+1).addClass('active');
          btnOk = true;
        });
      }
      indiTitleLi.removeClass('active');
    }
  });
  

  // title, content text  

  var viewBannerH3 = viewBannerBg.find('h3');
  viewBannerH3.text(MainfilmList[0].title);

  viewBannerBgLi.eq(0).show();
  viewBannerBgLi.eq(0).addClass('active');

  var ViewBannerTextFn = function(n,k){

    if(n<0){
      viewBannerH3.text(MainfilmList[7].title);
    }else{
      viewBannerH3.text(MainfilmList[n].title);
    }

    if(k!==n){
      viewBannerBgLi.eq(n).css({zIndex:5});
      viewBannerBgLi.eq(k).fadeOut(100,function(){
        viewBannerBgLi.eq(n).fadeIn();
        viewBannerBgLi.removeClass('active');
        $(this).addClass('active');
      });
    }
  };
  
  // list clone
  var liLast = viewFilmLi.eq(-1*(mvLength+1)).nextAll('li');
  viewFilmWrap.prepend(liLast);

  viewFilmLi = viewFilmWrap.find('li');
  var viewFilmLiLen = viewFilmLi.length;
  console.log(viewFilmLiLen);

  var liWidth = 100/viewFilmLiLen;
  viewFilmWrap.css({width:viewFilmLiLen*100+'%',transform:'translateX(-' + liWidth*mvLength + '%)'});
  viewFilmLi.css({width:liWidth+'%'});
  viewFilmWrap.css({position:'relative'});

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
      
      viewFilmWrap.stop().animate({left: -100 + '%'}, function(){
        if(n>=viewFilmLiLen-1){
          n = -1;
        }
        viewFilmLi.eq(mvLength-2).prevAll('li').appendTo(viewFilmWrap);
        viewFilmWrap.css({left:0});
        viewFilmLi = viewFilmWrap.find('li');

        indiTitle.animate({left:-inditFirstSize/2+'px'},function(){
          indiTitleLi.eq(mvLength-2).prevAll('li').appendTo(indiTitle);
          indiTitle.css({left:0});
          indiTitleLi = indiTitle.find('li');
        });
        indiTitleLi.eq(mvLength+1).addClass('active');
        btnOk = true;
      });
    }else if(btnOk){
      // 이전 버튼 클릭
      btnOk = false;
      n-=1;
      ViewBannerTextFn(n,k);

      viewFilmWrap.stop().animate({left: 100 + '%'}, function(){
        if(n<0){
          n=viewFilmLiLen-1;
        }
        viewFilmLi.eq(-1*(mvLength-1)).nextAll('li').prependTo(viewFilmWrap);
        viewFilmWrap.css({left:0});
        viewFilmLi = viewFilmWrap.find('li');
        
        indiTitle.animate({left:inditFirstSize/2+'px'},function(){
          indiTitleLi.eq(-1*(mvLength-1)).nextAll('li').prependTo(indiTitle);
          indiTitle.css({left:0});
          indiTitleLi = indiTitle.find('li');
        });  
        indiTitleLi.eq(mvLength-1).addClass('active');
        btnOk = true;
      });     
    }
    indiTitleLi.removeClass('active');
  });
  


  // end
})(jQuery);