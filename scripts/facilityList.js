import { getFacilities, getTransientState } from "./database.js"


const facilities = getFacilities()




// document.addEventListener("DOMContentLoaded", (event) => {
//     let buttons = document.querySelectorAll('.button');
//     console.log(buttons)
//     for (const button of buttons) {
//         // buttons.disabled = true
//         if (transientState > 0) {
//             button.disabled = true
//         } else {
//             button.disabled = true
//         }
//     }
   

//       });
  

    export const facilityList = () => {

        let html = "<section>"

        const transientState = getTransientState()
        console.log(transientState)

        const listItems = facilities.map(facility => {
            return `
            <button ${transientState === '0' ? "disabled" : ""} class="facility__selector"
            id="facility--${facility.id}">${facility.name}</button>
        `
        }
        )

        html += listItems.join("")
        html += "</section>"

        return html
    }
