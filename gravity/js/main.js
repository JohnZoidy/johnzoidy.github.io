$(function() {
    $('.works-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        stagePadding: 240,
        startPosition: 0,
        navText: ['<img src="img/Arrow left.svg" alt="left">', '<img src="img/Arrow right.svg" alt="Right">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: ['<img src="img/Arrow left.svg" alt="left">', '<img src="img/Arrow right.svg" alt="Right">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

