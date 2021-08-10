
import { getGovernors, getColonies, getMinerals, getPurchasedMinerals, getTransientState } from "./database.js";
const governors = getGovernors()
const colonies = getColonies()
const minerals = getMinerals()
const purchasedMinerals = getPurchasedMinerals()

const foundGovernor = () => {
    const transientState = getTransientState()
    let matchingGovernor 

    for (const governor of governors) {

        if (transientState.governorId === governor.id) {
            matchingGovernor = governor
        }

    }
    return matchingGovernor
}
foundGovernor()

// const foundColony = () => {
//     let matchedGovernor = foundGovernor()

//     let matchingGovColony
//     for (const colony of colonies) {
//         if (matchedGovernor.colonyId === colony.id) {
//             matchingGovColony = colony
//         }

//     }
//     return matchingGovColony

// }



// const ColonyMineral = () => {
    
//     foundColony()

//         // let matchedGovColony =foundColony()

//         // let colonyPurchasedMineral = purchasedMinerals.filter(mineral => mineral.colonyId === matchedGovColony.id)



//         // console.log(colonyPurchasedMineral)







// }

export const ColonyMinerals = () => {

    //const minerals = ColonyMineral()
    let html = "<ul>"




    html += minerals
    html += "</ul>"

    return html
}