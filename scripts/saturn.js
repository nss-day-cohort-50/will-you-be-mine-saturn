import { facilityList } from "./facilityList.js";
import { Governors } from "./governors.js"

// document.addEventListener(
//     "change",
//     (event) => {
//         let button = document.querySelector(".button");
//         if (event.target.name === "governor" && event.target.value !== "0" ) {
//             button.disabled = true; 
//         }else{
//             button.disabled = false;
//         }
//     }
// )


export const saturn = () => {
    return `
        
        <article class="facilityOption">
        <h2>Active Mining Facility</h2>
        <section class="facilityList"> ${facilityList()}</section>


        </article>

        <article>

        <section>
        <h2>Chosen Minerals</h2>
        </section>

        </article>

        <article>
        <button id="orderButton">Choose All Minerals</button>
        </article>

        <article>
        <section class="governor">
        <label for="governor">Choose a governor:</label>
        ${Governors()}
        </section>

        </article>

        <article>
        <section>
        <h2>Available Resources for colony</h2>
        </section
        </article>

       
    `
}