// main.js

(function($){
  // start
  var win = $(window);
  var winW = win.width();
	var winH = win.height();

	var wrap = $('#wrap');
	wrap.height(winH);

	// ---------------------------
	var headBox = $('#headBox');
	headBox.wrap('<div class="headBox_wrap"></div>');

	var headBoxWrap = headBox.parent('div');
	var headBoxH = headBox.css('height');
  var headBoxBg = headBox.css('backgroundColor');
  
	headBoxWrap.css({
		width:'100%', height:headBoxH, backgroundColor:'#060c08',
		position:'fixed', top:0, left:0, zIndex:1000
	});

  var gnbArr = [
    {title: 'showbox movie', link:'film.html',  // gnbArr[0].title
     subList : [  // gnbArr[0].subList  
     // gnbArr[0].subList[0].linkName , gnbArr[0].subList[0].link
       {linkName : '쇼박스 라인업', link : 'lineUp.html'}, 
     {linkName : '현재상영작', link : 'onScreen.html' }
    ]},
    {title: 'company', link:'about.html',  //gnbArr[1].title
     subList : [     // gnbArr[1].subList
       {linkName : '(주)쇼박스소개', link : 'aboutCompany.html' },
       {linkName : '사업영역',  link : 'business.html'},
       {linkName : '회사연혁',  link : 'history.html'},
       {linkName : '윤리경영',  link : 'management.html'},
       {linkName : '오시는길',  link : 'location.html'}
    ]},
    {title: 'ir', link:'ir.html',  // gnbArr[2].title
     subList : [
       {linkName : '공시정보', link : 'ir.html'},
       {linkName : '요약재무정보', link : 'financial.html' },
       {linkName : 'ir 뉴스',  link : 'irNews.html'},
       {linkName : '내부정보관리규정',  link : 'rule.html'}
    ]},
    {title: 'recruit', link:'recruit.html',
     subList : [
       {linkName : '채용사이트', link : 'recruit.html'}
    ]}
   ];
  // ----------------------------
  var gnbBox = $('#gnbBox');
  gnbBox.append('<ul class="gnb_area clearfix"></div>');
  var gnbArea = gnbBox.children('.gnb_area');

  var i=0;
  var gnbDt, gnbTitle, gnb_sub, gnbSubLength, gnbSubLink, gnbSubText, gnbSubHref;
  for(; i < gnbArr.length; i++){
    // gnbArea.append('<li><dl> <dt><a href=""></a></dt> <dd></dd> </dl></li>');
    gnbArea.append('<li><dl> <dt></dt> <dd></dd> </dl></li>');

    gnbDt = gnbArea.children('li').eq(i).find('dt');
    gnbDt.attr({tabIndex:0});
    gnbTitle = gnbArr[i].title;
    // gnbDt.attr({href:gnbArr[i].link});

    gnbDt.text( gnbTitle );
    gnbArea.find('dd').eq(i).append('<ul class="gnb_sub"></ul>');
    gnb_sub = gnbArea.find('.gnb_sub');	
    
    gnbSubLength = gnbArr[i].subList.length; 
    for(var j = 0; j < gnbSubLength; j++){
      gnb_sub.eq(i).append('<li><a href=""></a></li>');
      gnbSubLink = gnb_sub.eq(i).find('li').eq(j).find('a');
      gnbSubText = gnbArr[i].subList[j].linkName;
      gnbSubHref = gnbArr[i].subList[j].link;
      gnbSubLink.text(gnbSubText);
      gnbSubLink.attr({href:gnbSubHref});
    }
  }// ---------------------------------------

  gnbArea.find('dd').hide();

  var mob = function(){
    gnbBox.hide();
  };

  var pcFull =function(){
    gnbArea.find('dt').on('mouseenter', function(){
      var thisDt = $(this);
      var thisDd = thisDt.next('dd');
      gnbArea.find('dt').removeClass('active');
      thisDt.addClass('active');
      gnbArea.find('dd').hide();
      thisDd.show();
    });
  
    headBox.on('mouseleave', function(){
      gnbArea.find('dt').removeClass('active');
      gnbArea.find('dd').hide();
    });
  };

  // pull_btn
  var pullBtn = headBox.find('.pull');
  var navSlideArea = headBox.find('.nav_slide');
  var navSlideMenu = navSlideArea.find('.nav_slide_m');
  var gnbClone = gnbArea.children('li').clone();
  var snsText = '<div class="sns_part">\
      <div><a href="https://www.facebook.com/Showbox.Movie"><span class="hidden">facebook</span></a></div>\
      <div><a href="#"><i class="fas fa-envelope"></i><span class="hidden">email address</span></a></div>\
    </div>';
  
  navSlideMenu.html(gnbClone);
  navSlideMenu = navSlideArea.find('.nav_slide_m');
  navSlideMenuDt = navSlideMenu.find('dt');
  
  // sns area
  navSlideMenu.append(snsText);
  var navSns = navSlideArea.find('.sns_part');


  // slide_menu 
  var navSlideAreaDis = navSlideArea.css('display');
  var btnOk = true;

  pullBtn.on('click',function(e){
    e.preventDefault();
    navSlideAreaDis = navSlideArea.css('display');
    console.log(navSlideAreaDis);
    if(navSlideAreaDis=='none' && btnOk){
      btnOk=false;
      navSlideArea.show('slide',{direction:'right'},600);
      pullBtn.addClass('active');
    }else if(navSlideAreaDis=='block'){
      btnOk=false;
      navSlideArea.hide('slide',{direction:'right'},600);
      pullBtn.removeClass('active');
    }
    btnOk=true;
  });

  navSlideArea.on('mouseleave',function(){
    navSlideArea.hide('slide',{direction:'right'},600);
    pullBtn.removeClass('active');
  });


  navSlideMenu.find('dd').hide();

  navSlideMenu.find('dt').on('mouseenter',function(){
    var thisDt = $(this);
    var thisDd = thisDt.next('dd');
    navSlideMenu.find('dd').hide();
    thisDd.show();
    thisDt.addClass('active');
  });

  navSlideMenu.find('dl').on('mouseleave',function(){
    var thisDt = $(this).parents('dd').prev('dt');
    
    navSlideMenuDt.removeClass('active');    
    navSlideMenu.find('dd').hide();
  });



  // scrooll 내려갈때 headBox 숨겼다가 올라갈때 나타나게 함
  var mouseOk = true;
  var winScroll=win.scrollTop();
  // console.log(winScroll);

  $(document).on('mousewheel DOMMouseScroll',function(e){
    // console.log(e.type);
    // console.log(e.originalEvent.wheelDelta);
    // console.log(e.originalEvent.detail);

    // var thisScrollTop = win.scrollTop();
    // console.log(thisScrollTop);
    // if(winScroll==thisScrollTop){
    //   headBoxWrap.hide();
    // }
    if(mouseOk){
      mouseOk=false;
      var evt = e.originalEvent;
      var mouseResult;
      if(evt.wheelDelta){
        mouseResult = -evt.wheelDelta;
      }else{
        mouseResult = evt.detail*40;
      }
    }
    // console.log(mouseResult);
    // -----------------------------------------------------

    if(mouseResult<0){
      headBoxWrap.slideDown();
    }else if(mouseResult>0){
      headBoxWrap.slideUp();
    }
      mouseOk=true;
  });
    

  if(winW<1024){
    mob();
  }else if(winW>=1024){
    pcFull();
  }


  // top ------------------------------------------------------------

  var topMvText = '<div class="top_move_btn"><a href="#"><span class="hidden">상단으로 이동</span></a></div>';
  $('#footBox').before(topMvText);

  var topMvBtn = $('.top_move_btn');
  topMvBtn.css({position:'fixed',right:'3%',bottom:'5rem',marginLeft:'3rem',zIndex:'1000',width:'20px',height:'100px',backgroundColor:'#fff'});
  topMvBtn.find('a').css({display:'block',width:'100%',height:'100%'});

  $(window).on('scroll', function(){
    var winScroll = $(window).scrollTop();
    (winScroll>=500)? topMvBtn.stop().fadeIn() : topMvBtn.stop().fadeOut();
    // if(winScroll>=1000){topMvBtn.stop().fadeIn();}
    // else{topMvBtn.stop().fadeOut();}
  });

  topMvBtn.on('click',['a'],function(e){
    $('html, body').animate({scrollTop:0},300);
  });
  
  // end
})(jQuery);