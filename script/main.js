$(function () {
    $("header nav .menu>li").mouseover(function () {
        $(".sub",this).stop().slideDown();
    });
    $("header nav .menu>li").mouseout(function () {
        $(".sub",this).stop().slideUp();
    });


    $(".ham").click(function () {
        $(".m-menu").stop().animate({ right: '0px' });
    });

    $(".close").click(function () {
        $(".m-menu").stop().animate({ right: '-200px' });
    });

    $(".m-menu nav ul>li").on({
        mouseover:function(){
            $(".m_submenu",this).stop().slideDown();
        },
        mouseout:function(){
             $(".m_submenu",this).stop().slideUp();
        }
    })


    $('.best .c_group').slick();

    /* section3 */
    $(".hto .box").slick({
        slide: 'none',
        arrows:'none',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slide:'div',
                    slidesToShow:2,
                }
            },
            {
            breakpoint: 767,
            settings: {
                slide:'div',
                slidesToShow:1,
            }
        }
        ]
    });

       
     
        $(window).on('resize', function() {
            $('.hto .box').slick('resize');
        });
    /* section3 */

    /* section4 */
   /*  $(".m-menu nav ul>li").on({
        click:function(){
            $(".m_submenu",this).stop().slideDown();
        },
        click:function(){
             $(".m_submenu",this).stop().slideUp();
        }
    })
 */
    $(".tr .text .t1").click(function () {
        $('.teabox1').css({
            display: 'block'
        });
    });
    $(".tr .text .t1").click(function () {
        $('.tr .text .t1').css({
            color: '#000'
        });
    });
    $(".tr .text .t1").click(function () {
        $('.teabox2').css({
            display: 'none'
        });
    });
    $(".tr .text .t1").click(function () {
        $('.teabox3').css({
            display: 'none'
        });
    });
    
    $(".tr .text .t2").click(function () {
        $('.teabox1').css({
            display: 'none'
        });
    });
    $(".tr .text .t2").click(function () {
        $('.teabox2').css({
            display: 'block'
        });
    });
    $(".tr .text .t2").click(function () {
        $('.teabox3').css({
            display: 'none'
        });
    });
    
    $(".tr .text .t3").click(function () {
        $('.teabox1').css({
            display: 'none'
        });
    });
    $(".tr .text .t3").click(function () {
        $('.teabox2').css({
            display: 'none'
        });
    });
    $(".tr .text .t3").click(function () {
        $('.teabox3').css({
            display: 'block'
        });
    });
    /* //section4 */

});