var $d = $(document),
    $w = $(window),
    $h = $("header"),
    $n = $("nav"),
    $nd = $("nav div"),
    $b = $("header div");

$d.scroll(function(){
  var s = $d.scrollTop(),
      wh = $w.height();
  $b.css("transform","translate3d(0,"+s/3+"px,0)");
  (s>$h.height()-$n.height()) ? $n.addClass("fixed") : $n.removeClass("fixed");
})

var navicon = document.querySelectorAll('.navicon');

[].forEach.call(navicon, function(navicon){
  var open = false;

  navicon.onclick = function(event){2
    event.preventDefault();

    if(!open) {
      this.classList.add('is--closed');
      $('nav').addClass('open');
      open = true;
    } else {
      this.classList.remove('is--closed');
      $('nav').removeClass('open');
      open = false;
    }
  }
});
/*
$(function(){
  $.getJSON('http://raw.githubusercontent.com/Inbreed/inbreed-android/master/www/test.json',function(data){
    console.log('success');
    $.each(data.bands,function(i,band){
      $('.modals').append('<div>"'+band.name+' '+band.img+' '+band.desc+' '+band.time+'</div>');
    });
  }).error(function(){
    console.log('error');
  });
});
*/
