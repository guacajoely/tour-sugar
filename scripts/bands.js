import { getBands } from "./database.js"
const allBands = getBands()

export const bandList = () => {
    
    let bandsHTML = "<ul>"

    for (const bandObject of allBands) {
        bandsHTML += `<li>${bandObject.name}</li>`
    }

    bandsHTML += "</ul>"

    return bandsHTML
}

// When a band name is clicked, a window alert should be presented to the user that displays all of the venues at which the band is playing.

