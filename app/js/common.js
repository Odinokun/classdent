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


/*
 *  jQuery Sticky Header v1.0.1
 *  Author: Danish Iqbal
 *  Website: http://plugins.imdanishiqbal.com/sticky-header
 *
 *  Licensed under MIT
 *
 */

(function($) {
    "use strict";
    $.fn.stickMe = function(options) {
        // Assigning variables
        var $window = $(window),
            $document = $(document),
            $elemTopOffset,
            $body = $('body'),
            position = 0,
            $elem = this,
            $elemHeight = $elem.innerHeight(),
            $win_center = $window.height() / 2,
            $pos,
            settings = $.extend({
                transitionDuration: 300,
                shadow: false,
                shadowOpacity: 0.3,
                animate: true,
                triggerAtCenter: true,
                topOffset: $elemHeight,
                transitionStyle: 'fade',
                stickyAlready: false
            }, options);
        // Initial state
        $elem
            .addClass('stick-me')
            .addClass('not-sticking');
        switch (settings.triggerAtCenter) {
            case (settings.triggerAtCenter && settings.topOffset < $elemHeight) || (settings.triggerAtCenter && settings.topOffset > $elemHeight):
                settings.triggerAtCenter = false;
                break;
        }
        if (settings.stickyAlready) {
            settings.triggerAtCenter = false;
            settings.topOffset = 0;
            stick();
        }

        $elemTopOffset = $elem.offset().top;

        function $elem_slide() {
            if (settings.animate === true && settings.transitionStyle === 'slide' && settings.stickyAlready !== true) {
                $elem.slideDown(settings.transitionDuration);
            }
            if (settings.animate === true && settings.transitionStyle === 'fade' && settings.stickyAlready !== true) {
                $elem.fadeIn(settings.transitionDuration);
            } else {
                $elem.show();
            }
            $elem.removeClass('not-sticking');
        }

        function stick() {
            if ($elem.hasClass('sticking')) {
                $elem.trigger('sticking');
            }
            if (position === 0) {
                position = 1;
                if(settings.stickyAlready === false) {
                    $elem.trigger('sticky-begin');
                }
            }
            if ($elem.hasClass('not-sticking')) {
                $elem.hide();
                $elem_slide();
            }
            if (settings.shadow === true) {
                $elem.css('box-shadow', '0px 1px 2px rgba(0,0,0,' + settings.shadowOpacity + ')');
            }
            $elem
                .addClass('sticking')
                .css('position', 'fixed')
                .css('top', '0');
            $body.css('padding-top', $elemHeight);
        }

        function unstick() {
            if (settings.shadow === true) {
                $elem.css('box-shadow', 'none');
            }
            $elem.addClass('not-sticking')
                .removeClass('sticking')
                .show()
                .css('position', 'relative');
            $body.css('padding-top', '0');
        }
        $window.scroll(function() {
            $pos = $window.scrollTop();
            if ($pos === 0) {
                position = 0;
                $elem.trigger('top-reached');
            }
            if (settings.triggerAtCenter === true) {
                if ($pos > $win_center + $elemHeight) {
                    stick();
                }
            }
            if (settings.triggerAtCenter === false) {
                if ($pos > settings.topOffset) {
                    stick();
                }
            }
            if ($pos + $window.height() > $document.height() - 1) {
                $elem.trigger('bottom-reached');
            }
            if (settings.triggerAtCenter === true) {
                if ($pos < (1 + $elemTopOffset)) {
                    unstick();
                }
            }
            if (settings.triggerAtCenter === false) {
                if ($pos < 1) {
                    if (settings.stickyAlready !== true) {
                        unstick();
                    }
                }
            }
        });
        return this;
    };
}(jQuery));