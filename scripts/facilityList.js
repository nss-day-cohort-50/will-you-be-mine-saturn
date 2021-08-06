import { getFacilities, getTransientState } from "./database.js"

const transientState = getTransientState()
const facilities = getFacilities()




document.addEventListener("DOMContentLoaded", (event) => {
    let buttons = document.querySelectorAll('.button');
    console.log(buttons)
    for (const button of buttons) {
        // buttons.disabled = true
        if (transientState > 0) {
            button.disabled = true
        } else {
            button.disabled = true
        }
    }
   

      });
  

    export const facilityList = () => {

        let html = "<section>"



        const listItems = facilities.map(facility => {
            return `
            <button name="facility" class="button" disabled>${facility.name}</button>
        `
        }
        )

        html += listItems.join("")
        html += "</section>"

        return html
    }
