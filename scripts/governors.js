import { getGovernors } from "./database.js";

const governors = getGovernors();

document.addEventListener(
    "click",
    (event)=>{
        if(event.target.name === "governor"){
            window.alert(event.target.value)
        }
    }
)



export const Governors = () => {
    let html = "<select>"
    html +=  "<option value='0'>select a governor</option>"
      
    // Use .map() for converting objects to <li> elements
    const listItems = governors.map(governor => {
        return `

        
          <option name="governor" value="${governor.id}">${governor.name}</option>
         
        `
    })

    html += listItems.join("")
    html += "</select>"

    return html
}

