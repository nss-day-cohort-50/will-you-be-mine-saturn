import { facilityList } from "./facilityList.js";
import { Governors } from "./governors.js"
import { ColonyMinerals} from "./colonies.js"


export const saturn = () => {
    
    return `
        <h1>Will You Be Mine Saturn</h1>
    
        <article class="choices">
        <h2>Facility List</h2>
            <section class="options__facility list options">
                
                ${facilityList()}
            </section>

            <section class="options__governor list options">
                <h2>Governor List</h2>
                ${Governors()}
            </section>

            <section class="options__mineral list options">
                <h2>Mineral List</h2>
                
            </section>

            <section class="options__colony list options">
                <h2>Colony List</h2>
               ${ColonyMinerals()}
            </section>
            </article>
    `
}