// photoBox.js

(function($){
  // start

  win = $(window);
  winW = win.innerWidth();
  var btnok = true;
  var n = 0;
  var k;
  

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
  var PhotoFrameUl = PhotoFrame.children('.photo_list');

  var textEl = function(i){
    var	listEl = '<li>\
            <a href="#">\
              <div class="img_bg"><span>'+ photoList[i].imgNarr +'</span></div>\
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

  var mvLength = 2; 
  var PhotoFrameLi = PhotoFrameUl.find('li'); 
  // var photoLast = PhotoFrameLi.eq(-1*(mvLength+1)).nextAll('li');
  // PhotoFrameUl.prepend(photoLast);
  photoLastLi = PhotoFrameUl.find('li');
  var photoBtnArea = PhotoFrame.find('.btn_area');
  var photoBtn = PhotoFrame.find('button');
   
  // PhotoFrameUl.css({width:200+'%'});

  var phoFirstSize = PhotoFrameLi.eq(1).outerWidth(true)*mvLength;
  // PhotoFrameUl.css({marginLeft:-phoFirstSize+'px'});
  PhotoFrameUl.css({position:'relative'});

  photoBtnArea.children('.prev').hide();
  var btnView = function(){
    if(n<=0){
      photoBtnArea.children('.prev').hide();
      photoBtnArea.children('.next').show();
    }else if(n>=2){
      photoBtnArea.children('.prev').show();
      photoBtnArea.children('.next').hide();
    }
    else{
      photoBtn.show();
    }
  };


  var photoSize = function(n,l){
    mvLength = l;
    phoFirstSize = PhotoFrameLi.eq(1).outerWidth(true)*mvLength;
    PhotoFrameUl.animate({left:-n*phoFirstSize+'px'}, function(){
      // materialBtn.show();
      btnView();
    });
  }
  photoBtn.on('click',function(e){
    e.preventDefault();
    var thisIt = $(this)[0];
    var nextBtn = photoBtnArea.children('.next')[0];
    if(thisIt == nextBtn){
      photoBtn.hide();
      n+=1;
      if(winW<640){
        photoSize(n,1);
      }else{
        photoSize(n,2);
      }
    }else{
      photoBtn.hide();
      n-=1;
      if(winW<640){
        photoSize(n,1);
      }else{
        photoSize(n,2);
      }
    }
  });
  
  // photoBtn.on('click', function(e){
  //   e.preventDefault();
  //   var clickIt = $(this)[0];
  //   if(clickIt == $('.next')[0]){
  //   }else if(btnOk){ }
  // });


  // end
})(jQuery);