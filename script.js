
const linkUrl = "./data.json"
const mainContainer = document.getElementById("main-content")

gsap.to(".profile-container", {x: "-150%",scale: 0.6 , duration: 0, delay: 0});

gsap.to(".profile-container", { x: "0%",duration: 1.5, delay: 0,  ease: "expo.out"});
gsap.to(".profile-container", { scale : 1,duration: 1.5, delay: 1,  ease: "expo.out"});

gsap.fromTo(".nav-flex", {opacity: 0}, { opacity: 1,duration: 1, delay: 1,  ease: "expo.out"});
gsap.fromTo(".scroll", {opacity: 0}, { opacity: 1,duration: 1, delay: 1,  ease: "expo.out"});


const getData = () =>{
    axios.get(linkUrl)
    .then((response) => 
        response.data.map((value) => {
            const divItem = document.createElement("DIV")
            divItem.className = "web-item"
            
            const divImg = document.createElement("DIV")
            divImg.className = "web-image"
            
            const devContent = document.createElement("DIV")
            devContent.className = "web-content"

            devContent.innerHTML = `<h2>${value.name}</h2><a href="${value.url}" class="view-button">View</a>`

            divItem.style.backgroundImage = `url('${value.image}')`
            divItem.appendChild(divImg)
            divItem.appendChild(devContent)

            mainContainer.appendChild(divItem)
        })    
    )
}

getData();