import { getBookings } from "./database.js"
const allBookings = getBookings()

export const bookingsList = () => {
    
    let bookingsHTML = "<ul>"

    for (const bookingObject of allBookings) {
        bookingsHTML += `<li class="booking--${bookingObject.id}">${bookingObject.bandName} is playing at ${bookingObject.venueName} on ${new Date(bookingObject.bookDate).toLocaleDateString()}</li>`
    }

    bookingsHTML += "</ul>"

    return bookingsHTML
}


// When a booking is clicked, a window alert should be presented to the user that displays all of the band information (name, genre, year formed, number of members).

// EXAMPLE OUTPUT: 
// Rocket Pumpkins
// EDM
// Formed in 2005
// 3 band members


