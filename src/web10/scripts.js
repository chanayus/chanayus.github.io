function switch_menu() {
    let menu = document.getElementById('mobile-menutab')
    let body_wraper = document.getElementById('body-wraper')
    body_wraper.style.transition = "0.35s";

    menu.style.transition = "0.35s";
    if (menu.style.width == "50%") {
        menu.style.opacity = "0";

        menu.style.width = "0%";
        body_wraper.style.left = "0"

        setTimeout(function() {
            menu.style.display = "none";
        }, 100)

    } else {
        menu.style.display = "initial";
        setTimeout(function() {
            menu.style.opacity = "1";
            menu.style.width = "50%"
            body_wraper.style.left = "40%"
        }, 0)

    }
}