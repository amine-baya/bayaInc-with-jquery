$(window).on('load', function () {

    $(".lood .loading").fadeOut(2000, function () {


        $(this).parent().fadeOut(1000, function () {

            $("html").niceScroll({
                cursorcolor: "red",
                cursorwidth: "6px",
                
            });

            $("body").css("overflow", "auto");

            $(".lood").remove()

        })
    })

});


$(document).ready(function () {
  // call nice scrol plugin
    $("html").niceScroll({
        cursorcolor: "red",
        cursorwidth: "6px",

    });

    // carousel boostrap
 $(".carousel-item").height($(window).height());

    $(window).resize(function () {
        $(".carousel-item").height($(this).height());
    })

    $('.carousel').carousel({
        interval: 10000
    });
    // call nice scrol plugin
   
    // box option

    var li = ".box-option .color ul li";

    $(".gear").click(function () {
        $(".box-option .color").toggle(1000)

        $(".gear i").toggleClass("active")
    })

    $(li).click(function () {
        var color = $(this).css("backgroundColor");
        
        $(".ac").css("color", color);

        $("link[href*='color']").attr("href", $(this).attr("data-value"))
        
    })

 
  
     $(window).on("scroll", function () {
         if ($(this).scrollTop() >= 1200) {
             $(".scroll i").fadeIn(500)
         }
         else {
             $(".scroll i").fadeOut(500) 
         }
     })

    $(".scroll i").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })
$(".button").mouseenter(function () {
    $(this).removeClass("black")

    $(this).addClass("red")
})
    $(".button").mouseleave(function () {
        $(this).removeClass("red")

        $(this).addClass("black")

    })

    $(".box-slid .container section h3").click(function () {
        $(this).next().slideToggle().siblings()

        $(".box-slid .container section p").not($(this).next()).slideUp()

    })

     $(".box-slid .container section h3").click(function () {
         $(this).children().toggleClass("i");

         $(".box-slid .container section h3 i").not($(this).children()).removeClass("i")         
     })
})
