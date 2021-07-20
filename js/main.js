let mobileMenuIsOpen = false;
const burgerIcon = document.getElementById('burgerIcon');
const xIcon = document.getElementById('xicon');

function changeMenuIcon() {
    console.log("GAGO");

    mobileMenuIsOpen = !mobileMenuIsOpen;
    if(mobileMenuIsOpen) {
        burgerIcon.style.display = "hidden"
        xIcon.style.display = "block"
    } else {
        burgerIcon.style.display = "block"
        xIcon.style.display = "hidden"
    }
}