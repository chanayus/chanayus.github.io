
const linkUrl = "./data.json"
const mainContainer = document.getElementById("main-content")


const initial = () =>{
    window.scrollTo(0, 0);
    const loader = document.querySelector("#loader")
    loader.style.opacity = "0";
    setTimeout(()=> {loader.remove();}, 350)

    gsap.to(".c", {x: "100%", duration: 0, delay: 0,  ease: "expo.out"});
    gsap.to(".c", {x: "0%", duration: 2, delay: 0,  ease: "expo.out"});
    gsap.to(".n", {y: "100%", duration: 0, delay: 0,  ease: "expo.out"});
    gsap.to(".n", {y: "0%", duration: 2, delay: 0,  ease: "expo.out"});
    gsap.to(".profile-info", {height: 0, duration: 0, delay: 0,  ease: "expo.out"});
    gsap.to(".profile-info", {height: "auto", duration: 1.5, delay: 0.1,  ease: "expo.out"});
    gsap.to("header", {background: "rgb(25, 25, 25)", duration: 0, delay: 0,  ease: "expo.out"});
    // gsap.to("header", {background: "rgb(50, 53, 44)", duration: 1, delay: 1,  ease: "expo.out"});
    gsap.fromTo(".nav-flex", {opacity: 0}, { opacity: 1,duration: 1, delay: 1,  ease: "expo.out"});
    gsap.fromTo(".scroll", {opacity: 0}, { opacity: 1,duration: 1, delay: 1,  ease: "expo.out"});

}

const getData = () =>{
    axios.get(linkUrl)
    .then((response) => 
        response.data.map((value,index) => {
            const divItem = document.createElement("DIV")
            divItem.setAttribute("data-aos", "zoom-in")
            divItem.className = "web-item"
            const divImg = document.createElement("DIV")
            divImg.className = "web-image"
            const devContent = document.createElement("DIV")
            devContent.className = "web-content"
            let link = index;
            devContent.innerHTML = `<h2>${value.name}</h2><a href="${value.url}" class="view-button">View</a>`

            divItem.style.backgroundImage = `url('${value.image}')`
            divItem.appendChild(divImg)
            divItem.appendChild(devContent)

            mainContainer.appendChild(divItem)
        })    
    )
}

const gotoElement = (destination) => { document.getElementById(destination).scrollIntoView(); }


window.addEventListener("scroll", () =>{
    const nav = document.querySelector("nav")
    const navLogo = document.querySelector("#nav-logo")
    const enable = "background: rgba(0,0,0,0.65); -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px);"
    const disable = "background: rgba(0,0,0,0); -webkit-backdrop-filter: blur(0px); backdrop-filter: blur(0px);"
    nav.style.cssText = window.scrollY > 0 ? enable : disable;
    navLogo.style.width = window.scrollY > 0 ? "34px" : "45px";

})

document.addEventListener("DOMContentLoaded", (event) => {
    window.onload = () => {initial()} 
});

AOS.init();
getData();