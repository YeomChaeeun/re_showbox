// main_filmBox.js
var filmList;

(function($){
  // start
  var win = $(window);
  var winW = win.width();

  $.ajax({
    url:'../data/ajaxFilm.json',
    dataType:'json',
    async:false,
    success:function(data){
      filmList=data;
      return filmList;
    }    
  });
  console.log(filmList);

  // filmList = [
  //   {no: '1', img:'movie_01.png', Pcimg:'movie_01.jpg', link: 'movie_01_info.html', imgNarr : '영화 01', title: '국제수사',  date: '2020', content: 'lorem ...', },
  //   {no: '2', img:'movie_02.png', Pcimg:'movie_02.jpg', link: 'movie_02_info.html', imgNarr : '영화 02', title: '남산의 부장들', date: '2020.01.22', content: 'lorem ...', },
  //   {no: '3', img:'movie_03.png', Pcimg:'movie_03.jpg', link: 'movie_03_info.html', imgNarr : '영화 03', title: '퍼펙트 맨', date: '2019.10.02', content: 'lorem ...', },
  //   {no: '4', img:'movie_04.png', Pcimg:'movie_04.jpg', link: 'movie_04_info.html', imgNarr : '영화 04', title: '봉오동 전투', date: '2019.08.07', content: 'lorem ...', },
  //   {no: '5', img:'movie_05.png', Pcimg:'movie_05.jpg', link: 'movie_05_info.html', imgNarr : '영화 05', title: '마담 싸이코', date: '2019.06', content: 'lorem ...', },
  //   {no: '6', img:'movie_06.png', Pcimg:'movie_06.jpg', link: 'movie_06_info.html', imgNarr : '영화 06', title: '미성년',  date: '2019.04.11', content: 'lorem ...', },
  //   {no: '7', img:'movie_07.png', Pcimg:'movie_07.jpg', link: 'movie_07_info.html', imgNarr : '영화 07', title: '돈',  date: '2019.03.20', content: 'lorem ...', },
  //   {no: '8', img:'movie_08.png', Pcimg:'movie_08.jpg', link: 'movie_08_info.html', imgNarr : '영화 08', title: '뺑반',  date: '2019.01.30', content: 'lorem ...', }
  // ];

  var imgUrl ='../img/movie_poster/';

  var filmBox = $('#filmBox');
  var filmArea = filmBox.find('.film_area');
  filmArea.append('<ul class="film_list clearfix"></ul>');
  var filmAreaUl = filmArea.children('ul');

  var textEl = function(i){
    var	listEl = '<li>\
            <a href="#">\
              <div class="img_bg"><span class="hidden">'+ filmList[i].imgNarr +'</span></div>\
              <dl><dt>'+ filmList[i].title +'</dt>\
                <dd>'+ filmList[i].date +'</dd>\
              </dl>\
            </a>\
            </li>';
    return listEl;
  };

  var i=0;
  for(; i<filmList.length; i++){	
    filmAreaUl.append( textEl(i) );
    filmAreaUl.children('li').eq(i).find('.img_bg').css({
      backgroundImage:'url('+ imgUrl + filmList[i].Pcimg +')',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'50% 50%',
      backgroundSize:'contain'
    })
  }

  var filmUl = filmBox.find('.film_list');
  var filmLi = filmUl.find('li');
  var slideBtn = filmBox.find('.slide_btn').find('button');

  var n=0;
  var k;
  var btnOk = true;
  var timed = 600;

  var mobFilm = function(){    
    var liLast = filmLi.eq(-1).clone(true);
    filmUl.prepend(liLast);

    filmLi = filmUl.find('li');
    var filmLiLen = filmLi.length;
    // console.log(filmLiLen);
    var liWidth = 100/filmLiLen;
    filmUl.css({width:filmLiLen*100+'%',transform:'translateX(-' + liWidth + '%)'});
    filmLi.css({width:liWidth+'%'});
    filmUl.css({position:'relative'});

    //button
    slideBtn.on('click',function(e){
      e.preventDefault();
      var clickIt = $(this)[0];
      k = n;
      if(clickIt == $('.next')[1]){
        // 다음 버튼 클릭
        btnOk = false;
        n+=1;
        filmUl.stop().animate({left: -n* 100 + '%'}, function(){
          if(n>=filmLiLen-2){
            n = -1;
            filmUl.css({'left':100+'%'});
          }
          btnOk = true;
        });
      }else if(btnOk){
        // 이전 버튼 클릭
        btnOk = false;
        n-=1;

        filmUl.stop().animate({left: -n * 100 + '%'}, function(){
          if(n<0){
            n=filmLiLen-2;
            filmUl.css({'left':-n*100+'%'});
          }
          btnOk = true;
        });     
      }
    });
  }

  //

  filmLi.find('a').on('click',function(e){
    e.preventDefault();
    var thisLi = $(this).parent('li');
    var thisIndex = thisLi.index();
    
    // console.log(thisIndex);
    var filmIndex = filmList[thisIndex].no;
    var filmTitle = filmList[thisIndex].title;
    // console.log(filmTitle);

    var tlSt = 'filmIndex='+filmIndex+'_&&filmTitle='+filmTitle;
    location='./filmPage.html?'+tlSt;
  });
  

  if(winW<640){
    mobFilm();
  }
  
  // 자동 슬라이드 기능
  var SetSlideInterval;
  var mySlideGo = function(){
    SetSlideInterval = setInterval(function(){
      slideBtn.trigger('click');
    }, timed*6);
  }
  var mySlideStop = function(){
    clearInterval(SetSlideInterval);  
  }

  mySlideGo(); 
  filmBox.on({mouseenter:mySlideStop,mouseleave:mySlideGo});

  // end
})(jQuery);