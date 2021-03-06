const database = {
    governors: [
        {
            id: 1,
            name: "Issac",
            status: true,
            colonyId: 1

        },
        {
            id: 2,
            name: "Joey",
            status: true,
            colonyId: 2

        },
        {
            id: 3,
            name: "Bruce",
            status: false,
            colonyId: 3

        },
        {
            id: 4,
            name: "Jim Thorpe",
            status: true,
            colonyId: 4

        },
        {
            id: 5,
            name: "Mean Jo Green",
            status: false,
            colonyId: 3

        },
    ],
    minerals: [
        {
            id: 1,
            name: "gypsum"
        },
        {
            id: 2,
            name: "gold"
        },
        {
            id: 3,
            name: "salt n' peppa"
        }
    ],
    facilities: [
        {
            id: 1,
            name: "The Hot Spot",
            status: true
        },
        {
            id: 2,
            name: "The Cold Spot",
            status: false
        },
        {
            id: 3,
            name: "Batman Building",
            status: true
        },
        {
            id: 4,
            name: "NSS Building",
            status: false
        }
    ],

    colonies: [
        {
            id: 1,
            name: "Joes Garage"
        },
        {
            id: 2,
            name: "Lab Cabin California"
        },
        {
            id: 3,
            name: "Uranus"
        },
        {
            id: 4,
            name: "Earf"
        }
    ],

    facilityMinerals: [
        {
            id: 1,
            mineralId: 1,
            facilityId:1 ,
            mineralQuantity:5 ,
        }
    ],
    purchasedMinerals: [
        {
        id:1,
        colonyId:1,
        mineralId:1,
        amount: 1
    },
        {
        id:2,
        colonyId:2,
        mineralId:2,
        amount: 6
    },
        {
        id:3,
        colonyId:3,
        mineralId:3,
        amount: 4
    },
        {
        id:4,
        colonyId:4,
        mineralId:3,
        amount: 6
    },
    ],

    chosenMinerals: [
        {
            id:1 ,
            mineralId: 1,
            colonyId: 1
        }
    ],

    transientState:{
     governorId:0

    }

}


export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}

export const getFacilities = () => {
    return database.facilities.map(list => ({...list}))
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}
export const getPurchasedMinerals = () => {
    return database.purchasedMinerals.map(purchasedMineral =>({...purchasedMineral}))
}

export const setGovernor = (id) => {
    database.transientState.governorId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))

}

export const getTransientState = ()=> {
    return database.transientState
}
