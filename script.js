
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
            
            const Img = document.createElement("IMG")
            Img.src = value.image

            const devContent = document.createElement("DIV")
            devContent.className = "web-content"

            devContent.innerHTML = `<h2>${value.name}</h2><center><a href="${value.url}"><button class="view-button">View</button></a></center>`

            divImg.appendChild(Img)
            divItem.appendChild(divImg)
            divItem.appendChild(devContent)

            mainContainer.appendChild(divItem)
        })    
    )
}

getData();