
import { getGovernors, getColonies, getMinerals, getPurchasedMinerals, getTransientState } from "./database.js";
const governors = getGovernors()
const colonies = getColonies()
const minerals = getMinerals()
const purchasedMinerals = getPurchasedMinerals()


const ColonyMineral = () => {
    const transientState = getTransientState()


    //     for (const governor of governors) {
    //         for (const colony of colonies) {
    //             for (const mineral of minerals) {
    //                 for (const purchasedMineral of purchasedMinerals) {
    //                     if(governor.id === transientState.governorId){
    //                         if(colony.id === governor.colonyId){
    //                             if(colony.id === purchasedMineral.colonyId){
    //                                 if(mineral.id === purchasedMineral.mineralId){
    //                                     //return `<li name="colonyMineral" value="${mineral.id}">${mineral.name}</li>`
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 } return `<li name="colonyMineral" value="${mineral.id}">${mineral.name}</li>`

    //             } 

    //         }

    //     }

    // }
    let governorColony
    let colonyMineral
    let matchingGovernor

for (const governor of governors) {
    if(transientState.governorId === governor.id){
        matchingGovernor = governor


    }
    
}


let colonyPurchasedMineral = purchasedMinerals.filter(mineral => word.length > 6);


















    for (const governor of governors) {
        for (const colony of colonies) {
            if (governor.id === transientState.governorId) {

                if (colony.id === governor.colonyId) {
                    governorColony = colony.name

                    console.log(governorColony)
                    for (const mineral of minerals) {
                        for (const purchasedMineral of purchasedMinerals) {
                            if (colony.id === purchasedMineral.colonyId) {
                                if (mineral.id === purchasedMineral.mineralId) {
                                    colonyMineral = mineral.name

                                }

                            }

                        } 
                        return `<li name="colonyMineral" value="${mineral.id}">${colonyMineral}</li>`

                    }
                }
            }

        }
    }
}

export const ColonyMinerals = () => {

    const minerals = ColonyMineral()
    let html = "<ul>"




    html += minerals
    html += "</ul>"

    return html
}