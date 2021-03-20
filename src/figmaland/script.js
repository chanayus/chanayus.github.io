
document.getElementById("nav-menu-mobile").style.right = "-100%"


const menuToggle = () => {
    let menu = document.getElementById("nav-menu-mobile");
    menu.style.right = menu.style.right === "-100%" ? "0" : "-100%"

}