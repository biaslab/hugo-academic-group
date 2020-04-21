// Smooth srolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (this instanceof SVGAElement){
      var target = $(this.href.baseVal);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        target_top = target.offset().top
        $('html, body').animate({
          scrollTop: target_top
        }, 1000);
        return false;
      }
    }
    else if ((location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
  });
});
