import { getGovernors } from "./database.js";

const governors = getGovernors();
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === 'governor' && event.target.value !== "0" ) {
            setGovernors(parseInt(event.target.value))
        }
    }
)
 

       
export const governorList = () => {
    let html = "<select>"
    html +=  "<option class='input' name='governor' value='0'>select a governor</option>"
      
    // Use .map() for converting objects to <li> elements
    const listItems = governors.map(governor => {
        return `

        
          <option class="input" name="governor" value="${governor.id}">${governor.name}</option>
       
        `
    }
)

    html += listItems.join("")
    html += "</select>"

    return html
}

