// Đăng nhập
$("#login").click(function () {
  window.open('Writer/Login.html', '_self');
});
//Lên đầu trang
$(document).ready(function () {
  $('body').append('<div id="toTop" class="btn btn-info"><span class="glyphicon glyphicon-chevron-up"><i class="fa fa-hand-o-up fa-lg"aria-hidden="true">Đầu trang</i>');
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});