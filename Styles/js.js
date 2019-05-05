// Đăng nhập
$("#login").click(function () {
  window.open('Writer/Login.html', '_self');
});

$("#eSportHome").click(function(){
  window.open('Home/eSport/eSport.html','_self')
})

$(".eSport").click(function()
{
  window.open('eSport.html','_self')
})


$(".PhimChieuRap").click(function()
{
  window.open('PhimChieuRap.html','_self')
})
$("#PhimChieuRapHome").click(function(){
  window.open('Home/Phim_chieu_rap/PhimChieuRap.html','_self')
})
$(".PhimChieuRapHome").click(function(){
  window.open('Home/Phim_chieu_rap/PhimChieuRap.html','_self')
})
$(".ThoiSuHome").click(function(){
  window.open('Home/Thoi_su/ThoiSu.html','_self')
})


$(".CongNghe").click(function()
{
  window.open('CongNghe.html','_self')
})
$("#CongNgheHome").click(function(){
  window.open('Home/Cong_nghe/CongNghe.html','_self')
})
$(".CongNgheHome").click(function(){
  window.open('Home/Cong_nghe/CongNghe.html','_self')
})


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