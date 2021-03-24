
const linkUrl = "./data.json"
const mainContainer = document.getElementById("main-content")

window.onload = () =>{
    wrapper.style.display = "none"
    gsap.to("#wrapper-transition", { opacity : 0,duration: 0.75, delay: 0,  ease: "expo.out"});

}

gsap.to(".profile-container", {x: "-150%",scale: 0.6 , duration: 0, delay: 0});
gsap.to(".profile-container", { x: "0%",duration: 1.5, delay: 0,  ease: "expo.out"});
gsap.to(".profile-container", { scale : 1,duration: 1.5, delay: 1,  ease: "expo.out"});
gsap.fromTo(".nav-flex", {opacity: 0}, { opacity: 1,duration: 1, delay: 1,  ease: "expo.out"});
gsap.fromTo(".scroll", {opacity: 0}, { opacity: 1,duration: 1, delay: 1,  ease: "expo.out"});

const headerBgColor = () =>{
    const date = new Date();
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayColor = day[date.getDay()]
    const colorBg = {
        "Sunday" : "linear-gradient(-45deg, #ff887c, #b11d4e)",
        "Monday" : "linear-gradient(-45deg, #d8bba0, #444)",
        "Tuesday": "linear-gradient(-45deg, #8f858e, #884c81)",
        "Wednesday": "linear-gradient(-45deg, #5b7e51, #8f8f8f)",
        "Thursday" : "linear-gradient(-45deg, #dbb480, #a56c21)",
        "Friday" : "linear-gradient(-45deg, #6ba7ca, #1a5c83)",
        "Saturday" : "linear-gradient(-45deg, #7c7c7c, #272727)"
    }
    const header = document.querySelector("header");
    header.style.backgroundImage = `${colorBg[dayColor]}`;
}

const getData = () =>{
    axios.get(linkUrl)
    .then((response) => 
        response.data.map((value,index) => {
            const divItem = document.createElement("DIV")
            divItem.className = "web-item"
            
            const divImg = document.createElement("DIV")
            divImg.className = "web-image"
            
            const devContent = document.createElement("DIV")
            devContent.className = "web-content"
            let link = index;
            devContent.innerHTML = `<h2>${value.name}</h2><a href="javascript: pageNavigate(${link});" link="${value.url}" id="link-id-${link}" class="view-button">View</a>`

            divItem.style.backgroundImage = `url('${value.image}')`
            divItem.appendChild(divImg)
            divItem.appendChild(devContent)

            mainContainer.appendChild(divItem)
        })    
    )
}

const gotoElement = (destination) => { document.getElementById(destination).scrollIntoView(); }

const pageNavigate = (num) => {
    let tagA = document.querySelector(`#link-id-${num}`)
    let url = tagA.getAttribute("link")
    let wrapper = document.querySelector(`#wrapper-transition`)
    wrapper.style.display = "initial"
    gsap.to("#wrapper-transition", { opacity : 1,duration: 0.75, delay: 0,  ease: "expo.out"});
    setTimeout(()=> {
        window.location.href = url;
    }, 1000)
}
headerBgColor();
getData();
