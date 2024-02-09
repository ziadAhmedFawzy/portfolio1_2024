let $close = document.getElementById("close")
let bar = document.getElementById("bar")
let nav = document.getElementsByClassName("nav")[0]
let name_hero = document.getElementById("nameHero")
let cv = document.getElementById("cv")
let display2 = document.getElementById("display2");
let home = document.getElementById("home")
let contact = document.getElementById("contact")
let display4 = document.getElementById("display4")

bar.addEventListener("click", () => {
    display1.style.width = "75%"
    display2.style.width = "75%"
    display3.style.width = "75%"
    display4.style.width = "75%"
    name_hero.innerHTML = "Ziad.f"
    nav.classList.add("opening")
    nav.classList.remove("closing")
})

$close.addEventListener("click", () => {
    display1.style.width = "95%"
    display2.style.width = "95%"
    display3.style.width = "95%"
    display4.style.width = "95%"
    name_hero.innerHTML = "Z"
    nav.classList.remove("opening")
    nav.classList.add("closing")
})


$close.addEventListener("click", function() {
    bar.classList.remove("hidden")
    $close.classList.remove("display")
})

bar.addEventListener("click", function() {
    $close.classList.add("display")
    bar.classList.add("hidden")
})

cv.addEventListener("click", function() {
    cv.classList.add("active")
    home.classList.remove("active")
    proj.classList.remove("active")
    contact.classList.remove("active")
})


home.addEventListener("click", function() {
    home.classList.add("active")
    cv.classList.remove("active")
    proj.classList.remove("active")
    contact.classList.remove("active")
})

let proj = document.getElementById("proj")
let display3 = document.getElementById("display3")


proj.addEventListener("click", () => {
    home.classList.remove("active")
    cv.classList.remove("active")
    contact.classList.remove("active")
    proj.classList.add("active")
})


contact.addEventListener("click", () => {
    home.classList.remove("active")
    cv.classList.remove("active")
    contact.classList.add("active")
    proj.classList.remove("active")
})


home.addEventListener("click", function() {
    display1.classList.remove("hidden")
    display2.classList.add("hidden")
    display3.classList.add("hidden")
    display4.classList.add("hidden")
})

cv.addEventListener("click", function() {
    display1.classList.add("hidden")
    display2.classList.remove("hidden")
    display3.classList.add("hidden")
    display4.classList.add("hidden")
})

proj.addEventListener("click", function() {
    display1.classList.add("hidden")
    display2.classList.add("hidden")
    display3.classList.remove("hidden")
    display4.classList.add("hidden")
})

contact.addEventListener("click", function() {
    display1.classList.add("hidden")
    display2.classList.add("hidden")
    display3.classList.add("hidden")
    display4.classList.remove("hidden")
})