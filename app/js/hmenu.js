// top menu
(function($) {
    $.fn.menumaker = function(options) {
        var cssmenu = $(this),
            settings = $.extend({
                title: "Menu",
                format: "dropdown",
                sticky: false
            }, options);

        return this.each(function() {
            cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
            $(this).find("#menu-button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.hide().removeClass('open');
                } else {
                    mainmenu.show().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });

            cssmenu.find('li ul').parent().addClass('parent');

            multiTg = function() {

                cssmenu.find(".parent").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function() {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').hide();
                    } else {
                        $(this).siblings('ul').addClass('open').show();
                    }
                });
            };

            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');

            resizeFix = function() {
                // ширина окна без скроллбара
                var documentWidth = document.documentElement.clientWidth;
                if ($(documentWidth) > 768) {
                    cssmenu.find('ul').show();
                }
                if ($(documentWidth) <= 768) {
                    cssmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(document.documentElement.clientWidth).on('resize', resizeFix);
        });
    };
})(jQuery);

(function($) {
    $(document).ready(function() {
        $(document).ready(function() {
            $("#hmenu").menumaker({
                title: "Menu",
                format: "multitoggle"
            });

            $("#hmenu").prepend("<div id='menu-line'></div>");
            var foundActive = false,
                activeElement, linePosition = 0,
                menuLine = $("#hmenu #menu-line"),
                lineWidth, defaultPosition, defaultWidth;

            $("#hmenu > ul > li").each(function() {
                if ($(this).hasClass('active')) {
                    activeElement = $(this);
                    foundActive = true;
                }
            });

            if (foundActive === false) {
                activeElement = $("#hmenu > ul > li").first();
            }

            defaultWidth = lineWidth = activeElement.width();
            defaultPosition = linePosition = activeElement.position().left;

            menuLine.css("width", lineWidth);
            menuLine.css("left", linePosition);

            $("#hmenu > ul > li").hover(function() {
                    activeElement = $(this);
                    lineWidth = activeElement.width();
                    linePosition = activeElement.position().left;
                    menuLine.css("width", lineWidth);
                    menuLine.css("left", linePosition);
                },
                function() {
                    menuLine.css("left", defaultPosition);
                    menuLine.css("width", defaultWidth);
                });
        });
    });
})(jQuery);