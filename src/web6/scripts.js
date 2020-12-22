function menu_toggle() {
    menu_bar = document.getElementById("menu-mobile")
    menu_bar.style.transition = "0.25s";
    if (menu_bar.style.height == "190px") {
        menu_bar.style.height = "0%";
    } else {
        menu_bar.style.height = "190px"
    }

}