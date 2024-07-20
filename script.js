function videoScale() {
    const videoContainer = document.querySelector("#video-container");
    const video = document.querySelector("#video-container video");
    const playheadcursor = document.querySelector("#playhead");

videoContainer.addEventListener("mouseenter", () => {
    gsap.to("#video-container video", {
        scale: 1.05,
        duration: 0.5,
    })
    
})
video.addEventListener("mouseenter", () => {
    video.play();
})
videoContainer.addEventListener("mouseleave", () => {
    gsap.to("#video-container video", {
        scale: 1,
        duration: 0.5,
    })
})
}
videoScale();

function imageScale() {
    const imagearray = document.querySelectorAll(".card img");

imagearray.forEach((current) => {
    current.addEventListener("mouseenter", () => {
        gsap.to(current, {
            scale: 1.05,
            duration: 0.5,
        })
    })
})

imagearray.forEach((current) => {
    current.addEventListener("mouseleave", () => {
        gsap.to(current, {
            scale: 1,
            duration: 0.5,
        })
    })
})

}
imageScale();

// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll();

function heroPageAnimation() {
    let tl = gsap.timeline();
tl.from("#title", {
    y: -30,
    duration: 0.4,
    opacity: 0,
})

tl.from(".nav-r-items", {
    y: -10,
    duration: 0.4,
    opacity: 0,
    stagger: 0.2,
})
tl.from(".hero-title", {
    y: 50,
    stagger: 0.1,
    duration: 0.3,
    opacity: 0,
})

}
heroPageAnimation();

function menuPage() {
    
const openMenuButton = document.querySelector("#open-menu");
const closeMenuButton = document.querySelector("#close-menu");
const menuContainer = document.querySelector("#menu-container");

openMenuButton.addEventListener("click", () => {
    menuContainer.classList.remove("hidden");
    gsap.from(menuContainer,{
        y: -1000,
        duration:0.8,
        ease: "expo.out",
    })
})

closeMenuButton.addEventListener("click", () => {
    menuContainer.classList.add("hidden");
})
}
menuPage();