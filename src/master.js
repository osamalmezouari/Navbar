"use strict";
const Navbar = document.querySelector(".largerScreen");
const sections = document.querySelector("#sections");
const bars = document.querySelector("#bars");
let active = true;
const screenWidth = window.innerWidth;
if (screenWidth <= 900) {
    Navbar.className = "smallScreen";
    sections.style.display = "none";
}
bars.onclick = () => {
    if (active) {
        sections.style.display = "block";
        sections.style.animationName = "maxHeight";
        active = false;
    }
    else {
        sections.style.animationName = "minHeight";
        active = true;
    }
};
