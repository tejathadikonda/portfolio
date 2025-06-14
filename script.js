$(document).ready(function () {
    // navbar and scroll-up button logic
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up button
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    // smooth scroll on menu click
    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // formspree contact form submission
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();
        var $form = $(this);
        var $status = $("#statusMessage");

        $.ajax({
            url: $form.attr("action"),
            method: "POST",
            data: $form.serialize(),
            dataType: "json",
            success: function () {
                $form[0].reset();
                $status.fadeIn().delay(3000).fadeOut();
            },
            error: function () {
                alert("There was an error submitting the form. Please try again later.");
            }
        });
    });
});
