$(document).ready(function () {
    $('.menutogglebtn').click(function () {
        $(this).toggleClass('active');
        $('.navigation_area').toggleClass('navActive')
    });
});

// back to top button start
$(document).ready(function () {
    // Show button after scrolling down 200px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    // Scroll to top smoothly
    $('#backToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
// back to top button end


// slider start
$(document).ready(function () {
    $('.gallerySlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });
});

// slider end