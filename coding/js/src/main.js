// main.js

(function($){
  // start
	var win = $(window);
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
		width:'100%', height:headBoxH, backgroundColor:headBoxBg,
		position:'fixed', top:0, left:0, zIndex:1000
	});

  var gnbArr = [
    {title: 'showbox movie', link:'film.html',  // gnbArr[0].title
     subList : [  // gnbArr[0].subList  
     // gnbArr[0].subList[0].linkName , gnbArr[0].subList[0].link
       {linkName : '쇼박스 라인업', link : 'storyMonfee.html'}, 
     // gnbArr[0].subList[1].linkName , gnbArr[0].subList[1].link
     {linkName : '현재상영작', link : 'aboutCompany.html' }
    ]},
    {title: 'company', link:'about.html',  //gnbArr[1].title
     subList : [     // gnbArr[1].subList
       {linkName : '(주)쇼박스소개', link : 'aboutCompany.html' },
       {linkName : '사업영역',  link : 'sponCompany.html'},
       {linkName : '회사연혁',  link : 'sponCompany.html'},
       {linkName : '윤리경영',  link : 'sponCompany.html'},
       {linkName : '오시는길',  link : 'sponCompany.html'}
    ]},
    {title: 'ir', link:'ir.html',  // gnbArr[2].title
     subList : [
       {linkName : '공시정보', link : 'storyMonfee.html'},
       {linkName : '요약재무정보', link : 'aboutCompany.html' },
       {linkName : 'ir 뉴스',  link : 'sponCompany.html'},
       {linkName : '내부정보관리규정',  link : 'sponCompany.html'}
    ]},
    {title: 'recruit', link:'recruit.html',
     subList : [
       {linkName : '채용사이트', link : 'storyMonfee.html'}
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

  gnbArea.find('dt').on('mouseenter', function(){
    var thisDt = $(this);
    var thisDd = thisDt.next('dd');
    gnbArea.find('dd').hide();
    thisDd.show();
  });

  headBox.on('mouseleave', function(){
    gnbArea.find('dd').hide();
  });

  // pull_btn
  var pullBtn = headBox.find('.pull');
  var navSlideArea = headBox.find('.nav_slide');
  var navSlideMenu = navSlideArea.find('.nav_slide_m');
  var gnbClone = gnbArea.children('li').clone();
  
  navSlideMenu.html(gnbClone);
  navSlideMenu = navSlideArea.find('.nav_slide_m');

  // slide_menu 
  pullBtn.on('click',function(e){
    navSlideArea.show('slide',{direction:'right'},600);
    pullBtn.addClass('active');
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
  });

  navSlideMenu.find('.gnb_sub').on('mouseleave',function(){
    navSlideMenu.find('dd').hide();
  });



  
  // end
})(jQuery);