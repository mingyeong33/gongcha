$(function () {
    $("header nav .menu>li").mouseover(function () {
        $("nav .sub").stop().slideDown();
    });
    $("header nav .menu>li").mouseout(function () {
        $("nav .sub").stop().slideUp();
    });


    $(".ham").click(function () {
        $(".m-menu").stop().animate({ right: '0px' });
    });

    $(".close").click(function () {
        $(".m-menu").stop().animate({ right: '-200px' });
    });

    $(".m-menu nav ul>li").click(function () {
        $(".m-menu .m_submenu").stop().slideDown();
    });
      $(".m-menu nav ul>li").click(function(){
          $(".m-menu .m_submenu").stop().slideUp();
      });

    $('.best .c_group').slick();

    /* section3 */
    $('.hto .box').slick({
                none,
        responsive: [

            {
                infinite: true,
                breakpoint: 1200,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    /* section3 */

    /* section4 */
    $(".tr .text .t1").on({
        click: function () {
            $('.tr .box1').css({
                display: 'block'
            });
        },
        click: function () {
            $(".tr .box2").css({
                display: 'none'
            });
        },
        click: function () {
            $(".tr .box3").css({
                display: 'none'
            });
        }
    });

    $(".tr .text .t2").on({
        click: function () {
            $('.tr .box1').css({
                display: 'none'
            });
        },
        click: function () {
            $(".tr .box2").css({
                display: 'block'
            });
        },
        click: function () {
            $(".tr .box3").css({
                display: 'none'
            });
        }
    });

    $(".tr .text .t3").on({
        click: function () {
            $('.tr .box1').css({
                display: 'none'
            });
        },
        click: function () {
            $(".tr .box2").css({
                display: 'none'
            });
        },
        click: function () {
            $(".tr .box3").css({
                display: 'block'
            });
        }
    });
    /* //section4 */
});