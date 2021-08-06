import { getFacilities } from "./database.js"

const facilities = getFacilities()




document.addEventListener("DOMContentLoaded", (event) => {
    let buttons = document.querySelectorAll('.button')
    for (const button of buttons) {
        if ( governor.id > 0) {
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
