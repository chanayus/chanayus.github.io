
const linkUrl = "./data.json"
const mainContainer = document.getElementById("main-content")

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