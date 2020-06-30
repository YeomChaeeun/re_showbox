// photoBox.js

(function($){
  // start

  win = $(window);
  winW = win.innerWidth();
  var btnok = true;
  var n = 0;
  var k;
  

  // photoThumList
  var photoList = filmList;
  
  var imgUrl ='../img/photoBox/';

  var photoBox = $('#photoBox');
  var PhotoFrame = photoBox.find('.photo_frame');
  PhotoFrame.append('<ul class="photo_list clearfix"></ul>');
  var PhotoFrameUl = PhotoFrame.children('.photo_list');

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
  var btnView = function(mvNum){
    if(winW>=1024){mvNum=3};
    if(n<=0){
      photoBtnArea.children('.prev').hide();
      photoBtnArea.children('.next').show();
    }else if(n>=mvNum-1){
      photoBtnArea.children('.prev').show();
      photoBtnArea.children('.next').hide();
    }
    else{
      photoBtn.show();
    }
  };


  var photoSize = function(n,l){
    mvLength = l;
    mvNum = PhotoFrameLi.length/l;
    console.log(mvNum);
    phoFirstSize = PhotoFrameLi.eq(1).outerWidth(true)*mvLength;
    PhotoFrameUl.animate({left:-n*phoFirstSize+'px'}, function(){
      // materialBtn.show();
      btnView(mvNum);
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