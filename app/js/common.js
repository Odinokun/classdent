// ===== stickly header =====
$(function() {
    $('.header__bottom').stickMe();
});


// ===== bx slider in top section =====
$(function() {
    $('#top-slider').bxSlider({
        mode: 'fade',
        pager: false
    });
})


// ===== Выравнивание высоты фона у infoboard__item =====
// === при загрузке ===
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

// === при ресайзе ===
$(function() {
    var columns = $('.infoboard__item');
    $(window).resize(function () {
        setEqualHeight(columns);
    });

    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.css('height', '');
        columns.each(function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        });
        columns.height(tallestcolumn);
    }
});
