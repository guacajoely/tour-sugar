import { getBands } from "./database.js"
const allBands = getBands()

export const bandList = () => {
    
    let bandsHTML = "<ul>"

    for (const bandObject of allBands) {
        bandsHTML += `<li id="band--${bandObject.id}">${bandObject.name}</li>`
    }

    bandsHTML += "</ul>"

    return bandsHTML
}

// When a band name is clicked, a window alert should be presented to the user that displays all of the venues at which the band is playing.

// FIRST WE ALSO NEED TO IMPORT THE ARAY OF BOOKINGS
import { getBookings } from "./database.js"
const allBookings = getBookings()

document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON A BAND?
        if (itemClicked.id.startsWith("band")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED BAND?
            const [,bandPrimaryKey] = itemClicked.id.split("--")


            //FIND THE WHOLE BAND OBJECT TO GET THE VENUES NAME
            let matchingBandName = null
            for (const bandObject of allBands){
                if (parseInt(bandPrimaryKey) === bandObject.id){
                    matchingBandName = bandObject.name
                }
            }

            //FIND ALL THE VENUES THAT THE SAME BANDID IS PLAYING AT IN THE BOOKINGS ARRAY
            let bookedVenuesArray = []
            for(const bookingObject of allBookings){
                if(parseInt(bandPrimaryKey) == bookingObject.bandID){
                    bookedVenuesArray.push(bookingObject.venueName)
                }
            }

            //ONLY RETURN ALERT IF bookedVenuesArray IS NOT EMPTY
            if(bookedVenuesArray.length > 0){

                const bookedVenuesString = bookedVenuesArray.join(' and ');
                // INSERT matchingBandName AND bookedVenuesString INTO ALERT
                window.alert(`${matchingBandName} is booked to play at ${bookedVenuesString}`)
            }

            else{
                window.alert(`${matchingBandName} is not booked to play anywhere yet`)
            }

        }
    }
)


