let burger = document.querySelector("#hamburger");
let menu = document.querySelector("#menuList");
let bgState = false;

burger.addEventListener('click', () => {
    if (bgState == false){
        bgState = true;
        menu.classList.add("openedMenu");
        menu.classList.remove("menuList");
    } else {
        bgState = false;
        menu.classList.remove("openedMenu");
        menu.classList.add("menuList");
    }
})

window.addEventListener('resize', () => {
    if(window.innerWidth >= 750 && bgState == true){
        bgState = false;
        menu.classList.remove("openedMenu");
        menu.classList.add("menuList");
    }
})