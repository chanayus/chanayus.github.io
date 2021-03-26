

const initialPage = () => {
    window.scrollTo(0, 0);
    const loader = document.querySelector("#loader")
    loader.style.display = "none"
    gsap.fromTo("nav", {opacity: 0}, { opacity: 1 ,duration: 1, delay: 1.5,  ease: "expo.out"});
    setTimeout(() =>{ document.body.style.overflow = "initial"}, 1600)
    
    gsap.fromTo("#slide1", {xPercent: -100}, { xPercent: 0,duration: 1, delay: 1,  ease: "expo.out"});
    gsap.fromTo("#slide1 .text-content", {x: "-100%"}, { x: 0,duration: 1, delay: 1.5,  ease: "expo.out"});
    gsap.fromTo("#slide1 .text-content-bg", {x: "-100%"}, { x: 0,duration: 1, delay: 1.1,  ease: "expo.out"});
    
    gsap.to("#content-slide2", { xPercent: 100,duration: 0, delay: 0,  ease: "expo.out"});
    gsap.to("#content-slide2 .text-content", { xPercent: 100,duration: 0, delay: 0,  ease: "expo.out"});
    
}

window.addEventListener('scroll', () => {
    let content = document.querySelector("#slide2")
    let contentPosition = content.getBoundingClientRect().top
    let screenPosition = window.innerHeight

    if(contentPosition < screenPosition-(screenPosition*0.5)){
        gsap.to("#content-slide2", { xPercent: 0,duration: 0.5, delay: 0.25,  ease: "expo.out"});
        gsap.to("#content-slide2 .text-content", { xPercent: 0, duration: 1, delay: 1,  ease: "expo.out"});
    }

});

window.addEventListener("load", () =>{
    initialPage()
})






