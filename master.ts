const Navbar = document.querySelector(".largerScreen") as HTMLDivElement
const sections = document.querySelector("#sections") as HTMLUListElement
const bars = document.querySelector("#bars") as HTMLDivElement

let active: boolean = true
const screenWidth: number = window.innerWidth

if (screenWidth <= 900) {
    Navbar.className = "smallScreen"
    sections.style.display = "none"
}
bars.onclick = ():void => {
    if (active) {
        sections.style.display = "block"
        sections.style.animationName = "maxHeight"
        active = false
    }
    else {
        sections.style.animationName = "minHeight"
        active = true   
    }
}
