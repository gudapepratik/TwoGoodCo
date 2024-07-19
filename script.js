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

