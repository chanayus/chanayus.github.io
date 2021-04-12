document.querySelector("#mobile-section").style.right = "-100%"

const menuToggle = () =>{
    const button = document.querySelector("#mobile-menu-button")
    button.classList.toggle('active')
    const menu = document.querySelector("#mobile-section")
    menu.style.right = menu.style.right === "-100%" ? 0 : "-100%"
    document.body.style.overflow = menu.style.right === "-100%" ? "initial" : "hidden"
}