

const menuToggle = (status) =>{
    const menu = document.getElementById("mobile-menu-select");
    if(status === 'on'){
        menu.style.top = 0
    }
    else{
        menu.style.top = -1500
    }

}