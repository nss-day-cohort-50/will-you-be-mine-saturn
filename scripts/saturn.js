import { facilityList } from "./facilityList.js";
import { Governors } from "./governors.js"


export const saturn = () => {
    
    return `
        <h1>Will You Be Mine Saturn</h1>
    
        <article class="choices">
            <section class="options__facility list options">
                <h2>Facility List</h2>
                ${facilityList()}
            </section>

            <section class="options__governor list options">
                <h2>Governor List</h2>
                ${Governors()}
            </section>

            </section>
        </article>
    `
}