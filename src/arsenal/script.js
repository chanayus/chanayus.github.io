
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

fetchData();


