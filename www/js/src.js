$(".toggle-main-nav").click(function() {
    $(".sandwich").toggleClass("active");
});

$(".main-nav ul a").click(function() {
    $(".main-nav").fadeOut(600);
    $(".sandwich").toggleClass("active");
}).append("<span>");

$(".toggle-main-nav").click(function() {
    if ($(".main-nav").is(":visible")) {
        $(".main-nav").fadeOut(600);
        $(".main-nav li a").removeClass("fadeInUp animated");
    } else {
        $(".main-nav").fadeIn(600);
        $(".main-nav li a").addClass("fadeInUp animated");
    };
});