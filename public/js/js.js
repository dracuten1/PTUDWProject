//Lên đầu trang
$(document).ready(function () {
    $('body').append('<div id="toTop" class="btn btn-info"><span class="glyphicon glyphicon-chevron-up"><i class="fa fa-chevron-circle-up" style="font-size:28px;color:blue"></i>Đầu trang');
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

// Xủ lý sự kiện

$(".CongNgheHome").click(function(){
    window.open('/Phap','_self')
  })