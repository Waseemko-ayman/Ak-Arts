// إخفاء وإظهار القائمة المسندلة

let burgerNav = document.querySelector(".burger-nav");
let listMenu = document.querySelector(".parent-menu");


burgerNav.onclick = function () {
    if (listMenu.style.display === "block") {
        listMenu.style.display = "none";
    } else {
        listMenu.style.display = "block";
    }
}

/**************************************************************/
let myHeader = document.getElementById("header");
let myButton = document.getElementById("group");
let logo = document.querySelector(".logo");

window.onscroll = function () {
    if (window.pageYOffset >= 500) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
    if (window.pageYOffset >= 200) {
        myHeader.style.backgroundColor = "#dddddde8";
        logo.style.color = "black";

    } else {
        myHeader.style.background ="none";
        logo.style.color = "white";
    }
};

myButton.onclick = function () {
    window.scrollTo(0, 0);
}