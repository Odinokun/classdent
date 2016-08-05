//background top menu
$(function() {
    $(window).scroll(function() {
        var topToDocument = window.pageYOffset || document.documentElement.scrollTop;
        var menu = document.getElementById('header');
        if (topToDocument <= 20) {
            menu.style.background = 'transparent';
        } else {
            menu.style.background = '#022f53';
        }
    });
});