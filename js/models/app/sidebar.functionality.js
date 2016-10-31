$(document).ready(function () {
    function dropdown(sublist) {
        var ul = " ul";
        $(sublist + ul).addClass('displayNone');
        $(sublist).on('click', function () {
            $(this).children('ul').toggleClass('displayNone');
            $(this).toggleClass('active');
            $(this).siblings().removeClass('active');
            $(this).siblings().removeClass('active').children('ul').addClass('displayNone');
        });

        $('.sidebar__sublist__category ul').click(function (e) {
            e.stopPropagation();
        });
    }
    function searchFilter(input, elements) {
        $(input).on('keypress keyup', function () {
            var value = $(this).val().toLowerCase();
            if (value != '') {
                $(elements).each(function () {
                    if ($(this).text().toLowerCase().indexOf(value) > -1) {
                        $(this).removeClass('displayNone');
                    } else {
                        $(this).addClass('displayNone');
                    }
                });
            } else {
                $(elements).removeClass('displayNone');
            }
        });
    }
    function prevDefault(selector) {
        var anchors = $(selector);

        for (var i = 0; i < anchors.length; i++) {
            anchors[i].click(function (e) {
                e.preventDefault();
            });
        }
    }
    function setDataId(elements) {
        var el = $(elements);
        el.each(function (index) {
            $(this).attr('data-id', index);
        });
    }

    setDataId('.sidebar__sublist__category ul li');
    dropdown('.sidebar__sublist__category');
    searchFilter('.sidebar__search__input', '.sidebar__list ul li');
    /*prevtDefault(".physics__list a");
     *zalezy czy bedziemy myslec o hashtagu czy nie,
     *jesli tak, to ta funkcja jest zbedna,
     *jesli pozbywamy sie hashtaga to potrzebujemy tej funkcji
     */
});