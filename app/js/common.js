// ===== stickly header =====
$(function() {
    $('.header__bottom').stickMe();
});


// ===== bx slider in top section =====
$(function() {
    $('#top-slider').bxSlider({
          mode: 'fade',
          // auto: true,
          pager: false
    });
})


// ===== Выравнивание высоты фона у infoboard__item =====
$(function() {
    jQuery(function($){
        var max_col_height = 0;
        $('.infoboard__item').each(function(){
            if ($(this).height() > max_col_height) {
                max_col_height = $(this).height();
            }
        });
        $('.infoboard__item').height(max_col_height);
    });
});