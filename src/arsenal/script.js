

const initialPage = () => {
    window.scrollTo(0, 0);
    gsap.fromTo("nav", {opacity: 0}, { opacity: 1 ,duration: 1, delay: 1.5,  ease: "expo.out"});
    setTimeout(() =>{ document.body.style.overflow = "initial"}, 1600)
    
    gsap.fromTo("#slide1", {xPercent: -100}, { xPercent: 0,duration: 1, delay: 1,  ease: "expo.out"});
    gsap.fromTo("#slide1 .text-content", {x: "-100%"}, { x: 0,duration: 1, delay: 1.5,  ease: "expo.out"});
    gsap.fromTo("#slide1 .text-content-bg", {x: "-100%"}, { x: 0,duration: 1, delay: 1.1,  ease: "expo.out"});
    
    gsap.to("#content-slide2", { xPercent: 100,duration: 0, delay: 0,  ease: "expo.out"});
    gsap.to("#content-slide2 .text-content", { xPercent: 100,duration: 0, delay: 0,  ease: "expo.out"});
    
}

const fetchData = async() =>{
    const data = await fetch("./player.json")
    let player = await data.json()

    player.goalkeeper.map((value) => addPlayer(value, "goalkeeper"))
    player.defender.map((value) => addPlayer(value, "defender"))
    player.midfielder.map((value) => addPlayer(value, "midfielder"))
    player.forward.map((value) => addPlayer(value, "forward"))
}

const addPlayer = (value, role) => {
    let card = document.createElement("div")
    let wrapper = document.createElement("div")
    let content = document.createElement("content")
    let position = document.getElementById(role)

    card.className = "card"
    wrapper.className = "wrapper"
    content.className = "content"

    content.innerHTML = `
        <h1>${value.name}</h1>
    `
    card.style.backgroundImage = `url("${value.img}")`
    card.appendChild(wrapper)
    card.appendChild(content)

    position.appendChild(card)

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


const changePage = () => {

}

changePage();
initialPage();
// fetchData();


