const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;
const btnMenu = document.querySelector("#btnMenu");
const btnClose = document.querySelector("#btnClose");
const menu = document.querySelector(".menu");
const menuContent = document.querySelector(".menu-content"); 
const fade = document.getElementById("fade");

btnMenu.addEventListener("click", function() {
    if(menu.classList.contains("show"))
    {
       fechar();
    }
    else{
        abrir();
    }
})

btnClose.addEventListener("click", function() {
    fechar();
});

function abrir()
{
    menu.classList.add("show");
    menuContent.classList.add("show");
    btnClose.classList.remove("hide");
    menu.style.width = getComputedStyle(document.documentElement).getPropertyValue('--menu-size');
    menu.style.top = headerHeight + 'px';
    fade.classList.toggle("show");
}

function fechar()
{
    menu.style.width = '0';
    btnClose.classList.add("hide");
    btnClose.classList.add("btnClose-animation");
    setTimeout(function() {
        btnClose.classList.remove("btnClose-animation");
    }, 500);
    setTimeout(() => menu.classList.remove("show"), 500);
    fade.classList.remove("show");
}