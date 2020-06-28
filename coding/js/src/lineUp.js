// lineUp.js

(function($){
  // tab menu 구현
  
  var filmBox = $('#filmBox');
  var filmArea = filmBox.find('.film_area');
  var filmUl = filmArea.find('ul');
  var filmLi = filmUl.find('li');
  var filmLiLen = filmLi.length;
  var filmTag;

  var tabArea = $('.tab_area');
  var tabUl = tabArea.children('ul');
  var tabLi = tabUl.find('li');
  filmLi.show();
  var filmFn = function(showTag){
    filmLi.hide();
    for(var i=0; i<filmLiLen;i++){
      filmTag = filmLi.eq(i).find('dl').find('span').text();
      if(filmTag==showTag){
        filmLi.eq(i).show();
      }
    }
    if(showTag==3){
      filmLi.show();
    }
  }

  tabLi.find('a').on('click',function(e){
    e.preventDefault();
    var thisLi = $(this).parent('li');
    var thisIndex = thisLi.index();
    // console.log(thisIndex);

    var showTag;
    switch(thisIndex){
      case 1 :
        showTag = 1;
        break;
      case 2 :
        showTag = 2;
        break;
      case 3 :
        showTag = 0;
        break;
      default :
        showTag=3;
    }
    filmFn(showTag);

  })






})(jQuery);