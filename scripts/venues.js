import { getVenues } from "./database.js"
const allVenues = getVenues()

export const venueList = () => {
    
    let venuesHTML = "<ul>"

    for (const venueObject of allVenues) {
        venuesHTML += `<li id="venue--${venueObject.id}">${venueObject.name}</li>`
    }

    venuesHTML += "</ul>"

    return venuesHTML
}

// When a venue name is clicked, a window alert should be presented to the user that displays all of the bands that have booked the venue.

// FIRST WE ALSO NEED TO IMPORT THE ARAY OF BOOKINGS
import { getBookings } from "./database.js"
const allBookings = getBookings()

document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON A VENUE?
        if (itemClicked.id.startsWith("venue")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED VENUE?
            const [,venuePrimaryKey] = itemClicked.id.split("--")


            //FIND THE WHOLE VENUE OBJECT TO GET THE VENUES NAME
            let matchingVenueName = null
            for (const venueObject of allVenues){
                if (parseInt(venuePrimaryKey) === venueObject.id){
                    matchingVenueName = venueObject.name
                }
            }

            //FIND ALL THE BANDS PLAYING AT THAT VENUEID IN THE BOOKINGS ARRAY
            let bookedBandsArray = []
            for(const bookingObject of allBookings){
                if(parseInt(venuePrimaryKey) == bookingObject.venueID){
                    bookedBandsArray.push(bookingObject.bandName)
                }
            }

            //ONLY RETURN ALERT IF bookedBandsArray IS NOT EMPTY
            if(bookedBandsArray.length > 0){

                const bookedBandsString = bookedBandsArray.join(' and ');
                // INSERT bookedBandsString AND matchingVenueName INTO ALERT
                window.alert(`${bookedBandsString} are booked to play at ${matchingVenueName}`)
            }

            else{
                window.alert(`no bands are booked to play at ${matchingVenueName} yet`)
            }

        }
    }
)
