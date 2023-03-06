import { getBookings } from "./database.js"
const allBookings = getBookings()

export const bookingsList = () => {
    
    let bookingsHTML = "<ul>"

    for (const bookingObject of allBookings) {
        bookingsHTML += `<li id="booking--${bookingObject.id}">${bookingObject.bandName} is playing at ${bookingObject.venueName} on ${new Date(bookingObject.bookDate).toLocaleDateString()}</li>`
    }

    bookingsHTML += "</ul>"

    return bookingsHTML
}


// When a booking is clicked, a window alert should be presented to the user that displays all of the band information (name, genre, year formed, number of members).

// FIRST WE ALSO NEED TO IMPORT THE ARAY OF BANDS 
import { getBands } from "./database.js"
const allBands = getBands()

document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON A BAND?
        if (itemClicked.id.startsWith("booking")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED BAND?
            const [,bookingPrimaryKey] = itemClicked.id.split("--")


            //GET THE BANDID BY LOOPING THROUGH THE BOOKINGS
            let matchingBandID = null
            for (const bookingObject of allBookings){
                if (parseInt(bookingPrimaryKey) === bookingObject.id){
                    matchingBandID = bookingObject.bandID
                }
            }

            //GRAB MATCHING BAND OBJECT FROM BAND ARRAY
            let  matchingBandObject = null
            for(const bandObject of allBands){
                if(matchingBandID == bandObject.id){
                    matchingBandObject = bandObject
                }
            }

            // INSERT DATA FROM BAND OBJECT INTO ALERT STRING
            window.alert(`${matchingBandObject.name} is a ${matchingBandObject.genre} band that was formed in ${matchingBandObject.founded} and has ${matchingBandObject.memberCount} band members`)
                            

        }
    }
)


