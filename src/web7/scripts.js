document.addEventListener('scroll', function() {
    nav = document.getElementById("navbar")
    if (window.scrollY == 0) {
        console.log("black")
        nav.style.background = "transparent";
        nav.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)";

    } else {
        nav.style.background = "#111";


    }
});


function menu_toggle() {
    menu_bar = document.getElementById("menu-sidebar")
    menu_bar.style.transition = "0.25s";
    if (menu_bar.style.width == "90%") {
        menu_bar.style.padding = "0";
        menu_bar.style.width = "0%";
    } else {
        menu_bar.style.padding = "30px";
        menu_bar.style.width = "90%"
    }

}