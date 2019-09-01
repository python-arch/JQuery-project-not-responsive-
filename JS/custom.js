/* global $, alert , console*/
$(function() {  
    // trigger our plugin
    $("body").niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth: "10px",
        cursorborderradius :"0px",
        cursorborder : "1px solid #f7600e"
    });
    // change header height
    $(".header").height($(window).height())
    $(window).on("resize", function () {
        $(".header").height($(window).height())
        })
    // features scroll
    $('.header .arrow').click(function () {
        $('html, body').animate({
            scrollTop: $(".features").offset().top
        }, 1200)
    })
    // hire scroll
    $('.hire').click(function () {
        $("html, body").animate({
            scrollTop: $(".our-team").offset().top
        }, 2000)
    })
    // show hidden items
    $(".show-more").on("click",function () {
        $(".work .hidden").fadeIn(3000)
        if($(".hidden").is(":visible")){
        $("button").prop("disabled", "true")
            $(".show-more").css({
                backgroundColor: "#DDD",
                color: "#000"
            })
    }
    });
    // check testim
    var left = $(".testim .s1"),
        right = $('.testim .s2');
    function check(){
        $(".client:first").hasClass('active') ? left.fadeOut(1000): left.fadeIn(1000)
        $(".client:last").hasClass('active') ? right.fadeOut(1000): right.fadeIn(1000)
    }
    check();
    $(".testim .arrow").on("click", function () {
        if($(this).hasClass("s2")){
            $(".testim .active").fadeOut(100 ,function () {
                $(this).removeClass("active").next('.client').addClass("active").fadeIn();
                check();
            })
        }else {
         $(".testim .active").fadeOut(100 ,function () {
                $(this).removeClass("active").prev('.client').addClass("active").fadeIn();
                check();
            })   
        }
    })
});