

const menu = document.querySelector("#mobile-menu")
menu.style.right = "-100%"
gsap.to(".menu-mobile",{opacity: 0, duration: 0, delay: 0});
gsap.fromTo(".header-content", {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 1, delay: 0});
const menuHandle = () =>{
    menu.style.right = menu.style.right === "0%" ? "-100%" : "0%";
    document.body.style.overflow = menu.style.right === "-100%" ? "initial" :  "hidden" ;
    if(menu.style.right === "-100%"){
        gsap.to(".menu-mobile",{opacity: 0, duration: 0.5, delay: 0});
        console.log("close")
    }
    else{
        gsap.to(".menu-mobile",{opacity: 1, duration: 0.5, delay: 1});
        console.log("open")
   }
}