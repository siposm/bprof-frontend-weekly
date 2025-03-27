"use strict"

async function getData() {
    let response = await fetch("https://api.siposm.hu/skill")
    let data = await response.json()
    render(data)
}

function render(data) {
    let target = document.querySelector("#target")
    data.forEach(element => {
        let p = document.createElement("p")
        p.textContent = element.name
        target.appendChild(p)
    })
}

getData()