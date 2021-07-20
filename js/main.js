let mobileMenuIsOpen = false;
const burgerIcon = document.getElementById('burgerIcon');
const xIcon = document.getElementById('xIcon');
const menuMobile = document.getElementById('menu-mobile');

window.changeMenuIcon = function changeMenuIcon() {
    mobileMenuIsOpen = !mobileMenuIsOpen;
    if(mobileMenuIsOpen) {
        burgerIcon.classList.remove("block");
        burgerIcon.classList.add("hidden");

        xIcon.classList.remove("hidden");
        xIcon.classList.add("block");

        menuMobile.classList.remove("hidden")
    } else {
        burgerIcon.classList.remove("hidden");
        burgerIcon.classList.add("block");

        xIcon.classList.remove("block");
        xIcon.classList.add("hidden");

        menuMobile.classList.add("hidden")
    }
}