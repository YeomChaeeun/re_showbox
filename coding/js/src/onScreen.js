// onScreen.js

(function($){
  var movieBox = $('#movieBox');
  var movieArea = movieBox.children('.moive_area');
  var tabUl = movieArea.children('.preview_tab').find('ul');
  var tabLi =tabUl.find('li');
  var tabBtn = tabLi.find('a');
  
  var preview = movieArea.find('.preview');
  var movie01 = preview.find('.movie_01');
  var movie02 = preview.find('.movie_02');
  // console.log(movie01);

  movie01.show();  
  tabLi.eq(0).addClass('active');

  tabBtn.on('click',function(e){
    e.preventDefault();
    var thisLi = $(this).parent('li');
    var thisIndex = thisLi.index();

    thisLi.addClass('active');
    thisLi.siblings('li').removeClass('active');

    if(thisIndex==0){
      movie02.hide();
      movie01.show();
    }else{
      movie01.hide();
      movie02.show();
    }
  });

  var viewBox = $('#viewBox');
  var viewBoxH2 = viewBox.children('h2');
  var viewVideo = viewBox.find('.video');
  var viewImage = viewBox.find('.view_img');
  
  $(document).on('scroll', function(){
    var doScroll = $(document).scrollTop();
    viewBoxH2.css({'marginTop':-doScroll/4+'px'});
    viewImage.css({'marginTop':doScroll*1.2+'px'});
  });



})(jQuery);