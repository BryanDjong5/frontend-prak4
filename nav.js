const hamburger = document.getElementById("hamburger");
const tombolNav = document.getElementById("tombol-nav");

let munculNav = false;

hamburger.addEventListener("click", function () {
    if (munculNav) {
        tombolNav.innerHTML = "";
    } else {
       tombolNav.innerHTML = `
            <a href="#home">Home</a>
            <a href="#About">About</a>
            <a href="#Education">Education</a>
            <a href="#Skills">Skills</a>
            <a href=#Project>Project
            <a href="#Contact">Contact</a>
            `;
        }
        munculNav = !munculNav;
});
