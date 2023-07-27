//carusel
const owl = $('.owl-carousel');
owl.owlCarousel({
    center:true,
    loop:true,
    items:3,

    responsive: {
        1200: {
            margin:30,
            startPosition:1,
        },
        620: {
            margin:20,
            startPosition:1,
        },
    
        0: {
            items:1,
            startPosition:0,
        },
    },
});

// Go to the previous item
$('.slider__btn-left').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

// Go to the next item
$('.slider__btn-right').click(function() {
    owl.trigger('next.owl.carousel');
})

//add class
document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}
document.querySelector('#menu-icon-wrapper2').onclick = function(){
    document.querySelector('#menu-icon2').classList.toggle('menu-icon-active');
}

const navBtn = document.querySelector('.nav__toggle')
const nav = document.querySelector('#nav')


navBtn.onclick = function () {
   nav.classList.toggle('nav--mobile')
   document.body.classList.toggle('no-scroll')
}

const navBtn2 = document.querySelector('#nav__toggle2')
const nav2 = document.querySelector('#nav2')


navBtn2.onclick = function () {
   nav2.classList.toggle('nav--mobile')
   document.body.classList.toggle('no-scroll')
}