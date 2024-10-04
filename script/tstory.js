$(function () {
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
});