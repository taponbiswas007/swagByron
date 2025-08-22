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


});


var swiper = new Swiper(".productShowcase", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 4.5,          // fractional
    spaceBetween: 30,
    loopedSlides: 5,             // >= total slides
    loopFillGroupWithBlank: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10, loopedSlides: 3 },
        768: { slidesPerView: 2, spaceBetween: 20, loopedSlides: 4 },
        1024: { slidesPerView: 3, spaceBetween: 30, loopedSlides: 5 },
        1440: { slidesPerView: 4.5, spaceBetween: 40, loopedSlides: 6 },
    },
});




// slider end

const defaultItemCount = 7;
const itemWidth = 238;

const wrapper = document.getElementById("InfiniteScrollWrapper");
const content = document.getElementById("InfiniteScroll");

const manageChildren = (childCount) => {
    while (content.children.length > defaultItemCount) {
        content.removeChild(content.lastChild);
    }

    for (let i = 0; i < childCount; i++) {
        for (let j = 0; j < defaultItemCount; j++) {
            const clone = content.children[j].cloneNode(true);
            content.appendChild(clone);
        }
    }

    content.style.width = `${itemWidth * defaultItemCount * (childCount + 1)}px`;
};

const core = (width) => {
    if (width <= 1920) {
        manageChildren(2);
    } else if (width <= 2560) {
        manageChildren(3);
    } else if (width <= 3840) {
        manageChildren(4);
    } else {
        manageChildren(8);
    }
};

const debounce = (func, delay) => {
    let timeout;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
};

const handleResize = debounce(() => core(window.innerWidth), 300);

window.addEventListener("load", () => {
    core(window.innerWidth);
});

window.addEventListener("resize", handleResize);