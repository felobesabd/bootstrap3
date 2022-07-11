$(document).ready(function() {
$('.carousel').carousel({
    interval: 5000
});
$('.box-gear').click(function()
    {
    $('.color').fadeToggle();
});
  let colorLi = $('.color ul li');
    colorLi
        .eq(0).css("backgroundColor","var(--main-background)").end()
        .eq(1).css("backgroundColor","#4517EB").end()
        .eq(2).css("backgroundColor","#50d74c").end()
        .eq(3).css("backgroundColor","#4cadd7").end()
        .eq(4).css("backgroundColor","#c34cd7");

    colorLi.click(function() {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });

    let scrollBtn = $("#scroll-top");

    $(window).scroll(function() {

        if ($(this).scrollTop() >= 600) {
            scrollBtn.show();
        }
        else {
            scrollBtn.hide();
        }
    });

    scrollBtn.click(function() {
        $("html,body").animate({ scrollTop: 0 }, 800);
    })
});

$(window).load(function()
{
 $(".loading-overlay .spinner").fadeOut(2000,
     function()
     {
         $(this).parent().fadeOut(2000,
             function() {
             $("body").css("overflow","auto");

             $(this).remove();
         })
     })
})