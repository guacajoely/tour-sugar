import { getVenues } from "./database.js"
const allVenues = getVenues()

export const venueList = () => {
    
    let venuesHTML = "<ul>"

    for (const venueObject of allVenues) {
        venuesHTML += `<li>${venueObject.name}</li>`
    }

    venuesHTML += "</ul>"

    return venuesHTML
}

// When a venue name is clicked, a window alert should be presented to the user that displays all of the bands that have booked the venue.


