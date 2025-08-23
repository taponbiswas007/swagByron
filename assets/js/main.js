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
    centeredSlidesBounds: true,   // ✅ যোগ করুন
    slidesPerView: 3.5,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10 },
        480: { slidesPerView: 1.5, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 2.5, spaceBetween: 30 },
        1440: { slidesPerView: 3.5, spaceBetween: 40 },
    },
});




// slider end

const defaultItemCount = 7;
const itemWidth = 238;

const wrappers = document.querySelectorAll('.infinite-scroll-wrapper');

const manageChildren = (content, childCount) => {
    const items = content.querySelectorAll('.infinite-scroll-items > .item-wrap');
    while (content.children.length > defaultItemCount) {
        content.removeChild(content.lastChild);
    }

    for (let i = 0; i < childCount; i++) {
        for (let j = 0; j < defaultItemCount; j++) {
            const clone = items[j].cloneNode(true);
            content.appendChild(clone);
        }
    }

    content.style.width = `${itemWidth * defaultItemCount * (childCount + 1)}px`;
};

const core = (width) => {
    wrappers.forEach(wrapper => {
        const content = wrapper.querySelector('.infinite-scroll-content');
        let childCount = 2;
        if (width <= 1920) childCount = 2;
        else if (width <= 2560) childCount = 3;
        else if (width <= 3840) childCount = 4;
        else childCount = 8;

        manageChildren(content, childCount);
    });
};

const debounce = (func, delay) => {
    let timeout;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
};

window.addEventListener("load", () => core(window.innerWidth));
window.addEventListener("resize", debounce(() => core(window.innerWidth), 300));
