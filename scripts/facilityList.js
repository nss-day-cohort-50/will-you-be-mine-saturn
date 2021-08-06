import { getFacilities, getTransientState } from "./database.js"


const facilities = getFacilities()



    export const facilityList = () => {

        let html = "<section>"

        const transientState = getTransientState()
        console.log(transientState)

        const listItems = facilities.map(facility => {
            return `
            <button ${transientState > 0 ? "" : "disabled"} class="facility__selector"
            id="facility--${facility.id}">${facility.name}</button>
        `
        }
        )

        html += listItems.join("")
        html += "</section>"

        return html
    }
