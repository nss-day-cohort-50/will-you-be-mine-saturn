import { Governors } from "./governors.js"



export const saturn = () => {
    return `
        <article>
        <section>
        <h2>Facility</h2>
        </section>

        <section>
        <h2>Facility</h2>
        </section>

        <section>
        <h2>Facility</h2>
        </section>

        <section>
        <h2>Facility</h2>
        </section>

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
       
        <label for="cars">Choose a governor:</label>
        ${Governors()}

        </article>

        <article>
        <section>
        <h2>Available Resources for colony</h2>
        </section
        </article>

       
    `
}