// name of hero and what is he say ?
let name = "ziad fawzy say"
let say = "hello in my portfolio"
let i = 0

// get elements
let display1 = document.getElementById("display1")


// add photo of hero and add some styling
let imageHero = document.createElement("img")
imageHero.src = "1.png"
imageHero.style.width = "250px"

// create parent
let parent = document.createElement("div")
parent.classList.add("parent")

// add classs to children
let childOne = document.createElement("div")
let childTwo = document.createElement("div")
childOne.classList.add("child-1")
childTwo.classList.add("child-2")

// create first element ziad fawzy say
let hero = document.createElement("h2")
let nameHero = document.createTextNode(name)
hero.appendChild(nameHero)

// hello in my portfolio
let header = document.createElement("h3")
let ziadSay = setInterval(function() {
    let saying = document.createTextNode(say[i])
    header.appendChild(saying)
    if(i+2 > say.length)
    {
        clearInterval(ziadSay)
    }
    console.log()
    i++
}, 100)

// create container of btns
let containerBtns = document.createElement("div")

// btn of send me
let btnCnnectMe1 = document.createElement("button")
let contentBtnOne = document.createTextNode("send me ")
btnCnnectMe1.appendChild(contentBtnOne)

// add icon to my btn send me
let iconBtn1 = document.createElement("i")
iconBtn1.setAttribute("class", "fa-solid fa-message")
btnCnnectMe1.appendChild(iconBtn1)

// btn of follow me
let btnCnnectMe2 = document.createElement("button")
let contentBtnTwo = document.createTextNode("follow me ")
btnCnnectMe2.appendChild(contentBtnTwo)

// add icon to my btn follow me
let iconBtn2 = document.createElement("i")
iconBtn2.setAttribute("class", "fa-solid fa-user-plus")
btnCnnectMe2.appendChild(iconBtn2)

containerBtns.appendChild(btnCnnectMe1)
containerBtns.appendChild(btnCnnectMe2)


childOne.appendChild(hero)
childOne.appendChild(header)
childTwo.appendChild(imageHero)
childOne.appendChild(containerBtns)
parent.appendChild(childOne)
parent.appendChild(childTwo)
display1.appendChild(parent)