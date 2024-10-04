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

    /* main */
    $("main section").mouseover(function () {
        $(".pp",this).css({
            display: 'block'
        });
    });
    $("main section").mouseout(function () {
        $(".pp",this).css({
            display: 'none'
        });
    });
    $("main section").mouseover(function () {
        $(".tt h3",this).css({
            color:'#C30E2F'
        });
    });
    $("main section").mouseout(function () {
        $(".tt h3",this).css({
            color:'#FFF'
        });
    });
    /* //main */
});