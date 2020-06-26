// lineUp.js

(function($){
  
  var imgUrl ='../img/movie_poster/';
  var LineUpList = filmList;

  var lineUpBox = $('#lineUpBox');
  var filmArea = lineUpBox.find('.film_area');
  filmArea.append('<ul class="film_list clearfix"></ul>');
  var filmAreaUl = filmArea.find('.film_list');
  console.log(filmAreaUl);
  var textEl = function(i){
    var	listEl = '<li>\
            <a href="#">\
              <div class="img_bg"><span class="hidden">'+ LineUpList[i].imgNarr +'</span></div>\
              <dl><dt>'+ LineUpList[i].title +'</dt>\
                <dd>'+ LineUpList[i].date +'</dd>\
              </dl>\
            </a>\
            </li>';
    return listEl;
  };

  var i=0;
  for(; i<LineUpList.length; i++){	
    filmAreaUl.append( textEl(i) );
    filmAreaUl.children('li').eq(i).find('.img_bg').css({
      backgroundImage:'url('+ imgUrl + LineUpList[i].Pcimg +')',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'50% 50%',
      backgroundSize:'contain'
    })
  }

  




})(jQuery);