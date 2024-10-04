$(function(){
    $("header nav .menu>li").mouseover(function () {
        $(".submenu",this).stop().slideDown();
    });
    $("header nav .menu>li").mouseout(function () {
        $(".submenu",this).stop().slideUp();
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
    /* //mAIN */

    /* bi */
    $(".bi .p .p1").click(function () {
        $('.cbox1').css({
            display: 'block'
        });
    });
    $(".bi .p .p1").click(function () {
        $('.cbox2').css({
            display: 'none'
        });
    });
    $(".bi .p .p1").click(function () {
        $('.cbox3').css({
            display: 'none'
        });
    });
    $(".bi .p .p2").click(function () {
        $('.cbox1').css({
            display: 'none'
        });
    });
    $(".bi .p .p2").click(function () {
        $('.cbox2').css({
            display: 'block'
        });
    });
    $(".bi .p .p2").click(function () {
        $('.cbox3').css({
            display: 'none'
        });
    });
    $(".bi .p .p3").click(function () {
        $('.cbox1').css({
            display: 'none'
        });
    });
    $(".bi .p .p3").click(function () {
        $('.cbox2').css({
            display: 'none'
        });
    });
    $(".bi .p .p3").click(function () {
        $('.cbox3').css({
            display: 'block'
        });
    });
    /* //bi */
    $('.gtb .slide').slick();
});