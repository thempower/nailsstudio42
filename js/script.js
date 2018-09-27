// menu
$("nav ul li a").on("click", function () {
    $("img").removeClass('active');
    $("nav ul li a").removeClass('active');
    $(this).addClass('active');

});

// images
$("img").on("click", function () {
    $("img").removeClass('active');
    $("nav ul li a").removeClass('active');
    $(this).addClass('active');

});
//nav 
$("a.home").on("click", function () {
    $(".content").removeClass('active');
    $('div.home').addClass('active');

});
$("a.offer").on("click", function () {
    $(".content").removeClass('active');
    $('div.offer').addClass('active');

});

$("a.gallery").on("click", function () {
    $(".content").removeClass('active');
    $('div.gallery').addClass('active');
});
$("a.about").on("click", function () {
    $(".content").removeClass('active');
    $('div.about').addClass('active');
});
$("a.contact").on("click", function () {
    $(".content").removeClass('active');
    $('div.contact').addClass('active');
});

// sidebar

$("img.manicure").on("click", function () {
    $(".content").removeClass('active');
    $('div.manicure').addClass('active');
});
$("img.pedicure").on("click", function () {
    $(".content").removeClass('active');
    $('div.pedicure').addClass('active');
});
$("img.other").on("click", function () {
    $(".content").removeClass('active');
    $('div.other').addClass('active');
});

//GOOGLE MAPS