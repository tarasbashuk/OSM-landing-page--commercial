$('document').ready(function () {

    let widthDoc = $('body').outerWidth();


    // dot navigation slider
    $('.feedback-slider:not(:first)').hide();
    $('.dot').click(function () {
        let wasActive = $('.active-dot').index();
        $('.active-dot').removeClass('active-dot');
        $('.feedback-slider').eq(wasActive).hide();
        $('.feedback-slider').eq($(this).index()).fadeIn(1500);
        $(this).addClass('active-dot')
    });



    $('.partners-slider-images:not(:first)').hide();

    $('.partners-slider-images').on('swipeleft', function (e) {
        if(widthDoc < 768) {
            e.preventDefault();
            let currentIndex = $('.active-nav-button').index();
            $('.partners-slider-images').eq(currentIndex).hide();
            $('.active-nav-button').removeClass('active-nav-button');
            $('.nav-button').eq(currentIndex - 1).addClass('active-nav-button');
            $('.active-slider-number').removeClass('active-slider-number');
            $('.img-slider-navigator-number').eq(currentIndex - 1).addClass('active-slider-number');
            $('.partners-slider-images').eq(currentIndex - 1).fadeIn(800);
        }});

    $('.partners-slider-images').on('swiperight', function (e) {
        if(widthDoc < 768) {
            e.preventDefault();
            let currentIndex = $('.active-nav-button').index();
            $('.partners-slider-images').eq(currentIndex).hide();
            $('.active-nav-button').removeClass('active-nav-button');
            $('.nav-button').eq(currentIndex - 1).addClass('active-nav-button');
            $('.active-slider-number').removeClass('active-slider-number');
            $('.img-slider-navigator-number').eq(currentIndex - 1).addClass('active-slider-number');
            $('.partners-slider-images').eq(currentIndex - 1).fadeIn(800);
        }});




    $('.prev').click(previousSlide);
    $('.next').click(nextSlide);

    function previousSlide() {
        let currentIndex = $('.active-nav-button').index();
        $('.partners-slider-images').eq(currentIndex).hide();
        $('.active-nav-button').removeClass('active-nav-button');
        $('.nav-button').eq(currentIndex - 1).addClass('active-nav-button');
        $('.active-slider-number').removeClass('active-slider-number');
        $('.img-slider-navigator-number').eq(currentIndex - 1).addClass('active-slider-number');
        $('.partners-slider-images').eq(currentIndex - 1).fadeIn(1500);
    }

    function nextSlide() {
        let currentIndex = $('.active-nav-button').index();
        $('.partners-slider-images').eq(currentIndex).hide();
        currentIndex = currentIndex === $('.nav-button').length - 1 ? -1 : $('.active-nav-button').index();
        $('.active-nav-button').removeClass('active-nav-button');
        $('.nav-button').eq(currentIndex + 1).addClass('active-nav-button');
        $('.active-slider-number').removeClass('active-slider-number');
        $('.img-slider-navigator-number').eq(currentIndex + 1).addClass('active-slider-number');
        $('.partners-slider-images').eq(currentIndex + 1).fadeIn(1500);
    }


    // кнопка прокрутки вверх

    $('#toTop').click(function () {

        $('body,html').animate({
            scrollTop: 0
        }, 800);

    });



    // бэкграунд для хедера
    $(function () {

        $(window).scroll(function () {

            if ($(this).scrollTop() > 50) {

                $('.main-page-header').css('background-color', 'rgba(255, 255, 255, 0.8)');
                $('#toTop').css('cursor', 'pointer');

            } else {

                $('.main-page-header').css('background-color', '');
                $('#toTop').css('cursor', '');

            }

        });
    });

    //скролл даун для кнопки в меню

    $('#toContacts').click(function () {

        $('body,html').animate({
            scrollTop: $(".contacts").offset().top
        }, 800);
        $('[name="firstname"]').focus();

    });

    $('#aboutUsLink').click(function () {

        $('body,html').animate({
            scrollTop: $("#about-us").offset().top
        }, 800);
        $('[name="firstname"]').focus();

    });

    $('#toClientsLink').click(function () {

        $('body,html').animate({
            scrollTop: $("#clients-review").offset().top
        }, 800);
        $('[name="firstname"]').focus();

    });

    $('#toContactsLink').click(function () {

        $('body,html').animate({
            scrollTop: $("#contacts").offset().top
        }, 800);
        $('[name="firstname"]').focus();

    });
});




//
//    $(".button").click(function() {
//var data = {
//    name: $("#form_name").val(),
//    email: $("#form_email").val(),
//    message: $("#msg_text").val()
//};
//$.ajax({
//    type: "POST",
//    url: "//tarbas.gitlab.io/osm-lp-v.1.2/email.php",
//    data: data,
//    success: function(){
//        $('.success').fadeIn(1000);
//    }
//});
//    });
