import { getFacilities } from "./database.js"

const facilities = getFacilities()

export const facilityList = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = facilities.map(facility => {
        return `<li>
            <button class="button">${facility.name}</button>
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
