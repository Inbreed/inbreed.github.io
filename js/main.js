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
