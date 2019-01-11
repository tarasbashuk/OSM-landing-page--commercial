/*jshint esversion: 6 */

$('.nav-header-burger').hide();

$('document').ready(function () {

    //    let widthDoc = $('body').outerWidth();


    // dot navigation slider
    // $('.feedback-slider:not(:first)').hide();
    // $('.dot').click(function () {
    //     let wasActive = $('.active-dot').index();
    //     $('.active-dot').removeClass('active-dot');
    //     $('.feedback-slider').eq(wasActive).hide();
    //     $('.feedback-slider').eq($(this).index()).fadeIn(1500);
    //     $(this).addClass('active-dot');
    // });

    // $('.feedback-slider').on('swipeleft', function (e) {
    //     e.preventDefault();
    //     let currentIndex = $('.active-dot').index();
    //     $('.feedback-slider').eq(currentIndex).hide();
    //     $('.active-dot').removeClass('active-dot');
    //     $('.dot').eq(currentIndex - 1).addClass('active-dot');
    //     $('.feedback-slider').eq(currentIndex - 1).fadeIn(800);
    // });
    //
    // $('.feedback-slider').on('swiperight', function (e) {
    //     e.preventDefault();
    //     let currentIndex = $('.active-dot').index();
    //     $('.feedback-slider').eq(currentIndex).hide();
    //     currentIndex = currentIndex === $('.dot').length - 1 ? -1 : $('.active-dot').index();
    //     $('.active-dot').removeClass('active-dot');
    //     $('.dot').eq(currentIndex + 1).addClass('active-dot');
    //     $('.feedback-slider').eq(currentIndex + 1).fadeIn(800);
    // });

// свайпер для отзывов
    let swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });


    // images slider
    $('.partners-slider-images:not(:first)').hide();

    $('.partners-slider-images').on('swipeleft', function (e) {
        if ($('body').outerWidth() < 768) {
            e.stopPropagation();
            let currentIndex = $('.active-nav-button').index();
            $('.partners-slider-images').eq(currentIndex).hide(500);
            $('.active-nav-button').removeClass('active-nav-button');
            $('.nav-button').eq(currentIndex - 1).addClass('active-nav-button');
            $('.active-slider-number').removeClass('active-slider-number');
            $('.img-slider-navigator-number').eq(currentIndex - 1).addClass('active-slider-number');
            $('.partners-slider-images').eq(currentIndex - 1).stop().show('slide', {
                direction: 'right'
            }, 500);
        }
    });

    $('.partners-slider-images').on('swiperight', function (e) {
        if ($('body').outerWidth() < 768) {
            e.stopPropagation();
            let currentIndex = $('.active-nav-button').index();
            $('.partners-slider-images').eq(currentIndex).hide(500);
            $('.active-nav-button').removeClass('active-nav-button');
            $('.nav-button').eq(currentIndex - 1).addClass('active-nav-button');
            $('.active-slider-number').removeClass('active-slider-number');
            $('.img-slider-navigator-number').eq(currentIndex - 1).addClass('active-slider-number');
            $('.partners-slider-images').eq(currentIndex - 1).stop().show('slide', {
                direction: 'left'
            }, 500);
        }
    });




    $('.prev').click(previousSlide);
    $('.next').click(nextSlide);

    function previousSlide() {
        let currentIndex = $('.active-nav-button').index();
        $('.partners-slider-images').eq(currentIndex).hide();
        $('.active-nav-button').removeClass('active-nav-button');
        $('.nav-button').eq(currentIndex - 1).addClass('active-nav-button');
        $('.active-slider-number').removeClass('active-slider-number');
        $('.img-slider-navigator-number').eq(currentIndex - 1).addClass('active-slider-number');
        $('.partners-slider-images').eq(currentIndex - 1).fadeIn(700);
    }

    function nextSlide() {
        let currentIndex = $('.active-nav-button').index();
        $('.partners-slider-images').eq(currentIndex).hide();
        currentIndex = currentIndex === $('.nav-button').length - 1 ? -1 : $('.active-nav-button').index();
        $('.active-nav-button').removeClass('active-nav-button');
        $('.nav-button').eq(currentIndex + 1).addClass('active-nav-button');
        $('.active-slider-number').removeClass('active-slider-number');
        $('.img-slider-navigator-number').eq(currentIndex + 1).addClass('active-slider-number');
        $('.partners-slider-images').eq(currentIndex + 1).fadeIn(700);
    }


    // кнопка прокрутки вверх

    $('#toTop').click(function () {
        if ($('body').outerWidth() > 576) {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
        }
    });


///линк для звонка


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  document.getElementById("header-phone").innerHTML = '<a class="contact-tel"  href="tel:+380442555555">+38 (044) 255 55 55 </a>';
 } else	{
  document.getElementById("header-phone").innerHTML = '<span class="contact-tel"  href="tel:+380442555555">+38 (044) 255 55 55 </span>';
}

    // бэкграунд для хедера
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.main-page-header').css('background-color', 'rgba(255, 255, 255, 0.8)');
            } else {
                $('.main-page-header').css('background-color', '');
            }
        });
    });

    // бургер


//    $('.nav-header-burger').hide();

    $('#burgerBtn').click(function (evt) {
        if ($('body').outerWidth() < 576) {
            evt.preventDefault();
//            $('.nav-header-burger').css('display', 'flex');
            $('.nav-header-burger').toggle("slide", 500);
            evt.stopImmediatePropagation();
//            $('.nav-header-burger').css('width', '50vw');
//            $('.nav-header-burger').css('display', 'flex');
        }
    });


    $(document).on('click touchstart', function (evt) {
        let container = $(".nav-header-burger"),
            container2 = $(".left-side-nav");
        if (container.has(evt.target).length === 1) {
            return;
        } else if ($('.nav-header-burger').is(':hidden')) {
            return;
        } else if (container2.has(evt.target).length === 1) {
            return;
        } else {
            $('.nav-header-burger').toggle("slide", 500);
            evt.stopImmediatePropagation();
            evt.preventDefault();

        }
    });


    //скролл для кнопок в меню

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

    });

    $('#toClientsLink').click(function () {

        $('body,html').animate({
            scrollTop: $("#clients-review").offset().top
        }, 800);

    });

    $('#toContactsLink').click(function () {

        $('body,html').animate({
            scrollTop: $("#contacts").offset().top
        }, 800);

    });

    $('#aboutUsLinkBurger').click(function () {

        $('body,html').animate({
            scrollTop: $("#about-us").offset().top
        }, 800);
        $('.nav-header-burger').toggle("slide", 500);

    });

    $('#toClientsLinkBurger').click(function () {

        $('body,html').animate({
            scrollTop: $("#clients-review").offset().top
        }, 800);
        $('.nav-header-burger').toggle("slide", 500);

    });

    $('#toContactsLinkBurger').click(function () {

        $('body,html').animate({
            scrollTop: $("#contacts").offset().top
        }, 800);
        $('.nav-header-burger').toggle("slide", 500);

    });
    
    //E-mail Ajax Send

    $("form").submit(function () {

        var th = $(this);

        $.ajax({

            type: "POST",

            url: "//ro_lozovoi.gitlab.io/osm-llc-commercial/mail.php", //Change!!!

            data: th.serialize()

        }).done(function () {

            alert("Message send!");

            setTimeout(function () {

                // Done Functions

                th.trigger("reset");

            }, 1000);

        });

        return false;

    });

});

