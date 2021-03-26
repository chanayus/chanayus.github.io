window.addEventListener("scroll", () =>{
    const nav = document.querySelector("nav")
    const enable = "background: rgba(0,0,0,0.65); backdrop-filter: blur(5px);"
    const disable = "background: rgba(0,0,0,0); backdrop-filter: blur(0px);"
    nav.style.cssText = window.scrollY > 0 ? enable : disable;
})