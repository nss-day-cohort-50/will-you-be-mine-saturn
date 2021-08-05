import { saturn } from "./saturn.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = saturn()
}

renderAllHTML()


