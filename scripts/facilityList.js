import { getFacilities } from "./database.js"

const facilities = getFacilities()

export const facilityList = () => {
    let html = "<section>"

   
    const listItems = facilities.map(facility => {
        return `
            <button class="button">${facility.name}</button>
        `
    })

    html += listItems.join("")
    html += "</section>"

    return html
}
