const fetchData = async() =>{
    const data = await fetch("../../player.json")
    let player = await data.json()

    player.goalkeeper.map((value) => addPlayer(value, "goalkeeper", "rgb(218, 148, 57)"))
    player.defender.map((value) => addPlayer(value, "defender", "rgb(11, 143, 184)"))
    player.midfielder.map((value) => addPlayer(value, "midfielder", "rgb(78, 172, 75)"))
    player.forward.map((value) => addPlayer(value, "forward", "rgb(216, 64, 64)"))
}

const addPlayer = (value, role, posColor) => {
    let card = document.createElement("div")
    let playerImg = document.createElement("div")
    let playerNumber = document.createElement("div")
    let img = document.createElement("img")
    let content = document.createElement("div")
    let position = document.getElementById(role)
    let loader = document.createElement("div")

    loader.className = "img-loader-container"
    card.className = "card"
    playerImg.className = "player-img"
    content.className = "content"
    playerNumber.className = "player-number"
    img.setAttribute("loading", "lazy")

    
    loader.innerHTML= "<div class='img-loader'></div>"
    content.style.borderLeft = `10px solid ${posColor}`
    playerNumber.innerHTML = ` <h1>${value.number}</h1>`
    img.src= `${value.img}`
    content.innerHTML = `
        <h1>${value.name}</h1>
    `
   
    content.appendChild(playerNumber)
    playerImg.appendChild(loader)
    playerImg.appendChild(img)
    card.appendChild(playerImg)
    card.appendChild(content)
    position.appendChild(card)

    img.addEventListener("load", () =>{
        img.style.opacity = "1";
        loader.remove()
    })


}

fetchData();