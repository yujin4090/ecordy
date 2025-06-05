// 메인배너
var swiper1 = new Swiper(".banner", {
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,
});

// BI
AOS.init({
    duration: 1000,
    offset: 300,
    easing: 'ease-out-back',
});

// 리뷰 사진
var swiper2 = new Swiper(".instagram", {
    slidesPerView: 4.2,
    spaceBetween: 20,
    pagination: {
        el: ".instagram .swiper-pagination",
        clickable: true,
    },
    loop: true,
});

// 신제품 버튼
var swiper3 = new Swiper(".btn", {
    // slidesPerView: 1.3,
    navigation: {
        nextEl: ".btn .swiper-button-next",
        prevEl: ".btn .swiper-button-prev",
    },
});

// 전체상품
const slide = gsap.timeline();
slide
    .to(".slide div", {
        x: -650,
    })

ScrollTrigger.create({
    animation: slide,
    trigger: ".slide",
    start: "top 20% center",
    end: "+=1500",
    scrub: true,
    pin: true,
    anticipatePin: 1, // 핀 효과를 부드럽게 줄 수 있음.
    markers: true,
});


const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);