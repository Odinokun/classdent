// ===== stickly header =====
$(function() {
    $('.header__bottom').stickMe();
});


// ===== search form visible =====
$('#header__bottom--search-btn').click(function() {
    var search = document.getElementById('search__form-wrap');
    $(search).toggleClass('active');
});


// ===== bx slider in top section =====
$(function() {
    $('#top-slider').bxSlider({
        mode: 'fade',
        pager: false
    });
})


// ===== bx slider in review section =====
$(function() {
    $('#review__slider').bxSlider({
        mode: 'fade',
        pager: false
    });
})


// ===== Выравнивание высоты фона у personal-sec__item =====
// === при загрузке ===
$(function() {
    jQuery(function($){
        var max_col_height = 0;
        $('.personal-sec__item').each(function(){
            if ($(this).height() > max_col_height) {
                max_col_height = $(this).height();
            }
        });
        $('.personal-sec__item').height(max_col_height);
    });
});
// === при ресайзе ===
$(function() {
    var columns = $('.personal-sec__item');
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


//===== arrow up =====
$(function() {
    $('#arrow-up').click(function() {
        $('html, body').animate({scrollTop: 0},1000);
        return false;
    })
});

$(function() {
    window.onscroll = function() {
        var arrow = document.getElementById('arrow-up');
        if(window.pageYOffset > 500){
            $(arrow).addClass('active');
        }
        else{
            $(arrow).removeClass('active');
        }
    }
});


//popup_form
$(function() {
    // popup open
    $('.popupOpen').click( function(e){
        e.preventDefault();

        $('.feedback, .layerBox').fadeIn();
        return false;
    });
    $('.feedback .btnBox').click( function(){
        $('.feedback').fadeOut();
        $('.success').fadeIn();
        return false;
    });

    // popup close
    $('.layerBox, .success .btnBox, .close_bth').click( function(){
        $('.layerBox, .popupBox').fadeOut();
        return false;
    });
});