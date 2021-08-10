
import { getGovernors,setGovernor,getTransientState } from "./database.js";

const transientState = getTransientState()
const governors = getGovernors();
document.addEventListener(
    "change",
    (event) => {


        console.log(event)
        if (event.target.name === 'governor' ) {
            setGovernor(parseInt(event.target.value))
        }
    }
)
 

       

export const Governors = () => {
    let html = "<select name='governor'>"


    html +=  "<option class='input' name='governor' value='0'>select a governor</option>"
      
    // Use .map() for converting objects to <li> elements
    const listItems = governors.map(governor => {
        
        return `

        
          <option ${transientState.governorId === governor.id ? "selected" : ""} class="input" name="governor" value="${governor.id}">${governor.name}</option>
       
        `
    }
)

    html += listItems.join("")
    html += "</select>"

    return html
}

