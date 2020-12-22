document.addEventListener('scroll', function() {
    let menu_button = document.getElementById('switch-button');
    nav = document.getElementById("navbar")
    tag_a = document.getElementsByClassName('desktoplink')
    if (window.scrollY == 0) {
        console.log("black")
        nav.style.background = "transparent";
        nav.style.color = "#111";
        menu_button.style.color = "#111";
        for (i = 0; i < tag_a.length; i++) {
            tag_a[i].style.color = "#111";
        }

    } else {
        nav.style.background = "#017dfb";
        nav.style.color = "#FFF";
        menu_button.style.color = "#FFF";
        for (i = 0; i < tag_a.length; i++) {
            tag_a[i].style.color = "#FFF";
        }
    }
});

function switch_menu() {
    let menu_button = document.getElementById('switch-button')
    let menu = document.getElementById('mobile-menu')
    menu.style.transition = "0.45s";
    if (menu.style.width == "90%") {
        menu.style.opacity = "0";
        menu.style.padding = "0";
        menu.style.width = "0%";
        menu_button.innerHTML = '<i class="fas fa-bars"></i>'

    } else {
        menu.style.opacity = "1";
        menu.style.padding = "30px";
        menu.style.width = "90%"
        console.log(menu_button)
        menu_button.innerHTML = '<i class="fas fa-times"></i>'
    }
}

let header_img = document.getElementById('header-content')
header_img.style.textAlign = "center"
header_img.style.opacity = "0";

setTimeout(function() {
    header_img.style.transition = "2s";
    header_img.style.opacity = "1";
}, 100)




let greece = document.getElementById('greece-logo');
greece.style.alignItems = "center";
let arr = ["G", "r", "e", "e", "c", "e"];

for (i = 0; i < arr.length; i++) {
    greece.innerHTML += "<span>" + arr[i] + "</span>";
}

let char_index = 0;
let time = setInterval(addtext, 90);

function addtext() {
    const span = greece.querySelectorAll('span')[char_index];
    span.classList.add('fade')
    char_index++;
    if (char_index == arr.length) {
        end();
        return;
    }
}

function end() {
    clearInterval(time);
    time = null;
}