
// for smooth Scroll in my website

function smoothScroll() {
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    speed: 2
});
}

smoothScroll();


// // Cursor follower

const cursorHidden = document.querySelector(".cursor");
cursorHidden.style.opacity = 0;

function mouseFollower(){

const bodyCursor = document.querySelector('body');
const cursorFollower = document.querySelector('.cursor');

bodyCursor.addEventListener("mouseenter", function(){
    gsap.to(cursorFollower,{

        opacity:1

    });
});

bodyCursor.addEventListener("mouseleave", function(){
    gsap.to(cursorFollower,{
        opacity:0

    });
});

bodyCursor.addEventListener("mousemove", function(dets){
    gsap.to(cursorFollower,{
       top: dets.y- -10,
       left: dets.x- -10

    });
});

};

mouseFollower();

// loding animation

function lodingAnimation(){
    gsap.from(".hero-content h1",{
        y:40,
        opacity:0,
        delay: 0.5,
        duration: 0.5,
        stagger: .2
    })

    gsap.from(".hero-content p",{
        y:40,
        opacity:0,
        delay: 0.6,
        duration: 0.5,
        stagger: .2
    })

    gsap.from(".p-btn",{
        y:40,
        opacity:0,
        delay: 0.6,
        duration: 0.5,
        stagger: .2
    })



}

lodingAnimation();





