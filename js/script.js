let elList = document.querySelector(".list")

for(let pokemon of pokemons) {
    
    // CREATE ELEMENTS
    
    let newItem = document.createElement("li")
    let newImg = document.createElement("img")
    let newDiv = document.createElement("div")
    let headerBox = document.createElement("div")
    let header = document.createElement("h1")
    let header2 = document.createElement("h2")
    let newImg2 = document.createElement("img")
    let newDiv2 = document.createElement("div")
    let newDesc = document.createElement("p")
    let newDesc2 = document.createElement("p")

    // CREATE ELEMENT ATRIBUTES

    newItem.setAttribute("class", "item")
    newImg.setAttribute("class", "pokemon-img")
    newImg.setAttribute("src", pokemon.img)
    newImg.setAttribute("width", "157")
    newImg.setAttribute("height", "157")
    newDiv.setAttribute("class", "div")
    headerBox.setAttribute("class", "header-box")
    header.setAttribute("class", "fs-5 fw-bold")
    header2.setAttribute("class", "fs-6 fw-bold")
    newImg2.setAttribute("src", "./img/Mask.png")
    newImg2.setAttribute("width", "25")
    newImg2.setAttribute("height", "21")
    newDiv2.setAttribute("class", "desc-box")
    newDesc.setAttribute("class", "fs-5 fw-bold")
    newDesc2.setAttribute("class", "fs-5 fw-bold age")

    // CREATE ELEMENT TEXT-CONTENTS

    header.textContent = pokemon.name
    header2.textContent = pokemon.candy
    newDesc.textContent = pokemon.weight
    newDesc2.textContent = pokemon.type


    // APPEND CHILD 

    newItem.appendChild(newImg)
    newItem.appendChild(newDiv)
    newItem.appendChild(newDiv2)
    newDiv.appendChild(headerBox)
    newDiv.appendChild(newImg2)
    headerBox.appendChild(header)
    headerBox.appendChild(header2)
    newDiv2.appendChild(newDesc)
    newDiv2.appendChild(newDesc2)
    elList.appendChild(newItem)


}