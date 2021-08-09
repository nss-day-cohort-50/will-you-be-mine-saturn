import { saturn } from "./saturn.js"
import { facilityList } from "./facilityList.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = saturn()
}

renderAllHTML()

const facilityContainer = document.querySelector(".options__facility ")
const renderFacility =() =>{
    facilityContainer.innerHTML = facilityList()
}

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...", event)
  
    renderFacility()
})