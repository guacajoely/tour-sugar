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


// EXPLORER CHAPTER, DISPLAY BAND MEMBER INFO ABOVE BOOKED VENUE LIST
//WE HAVE THE PRIMARY BAND KEY, WE JUST NEED TO ALSO IMPORT OUR NEW MEMBER LIST FROM THE DB
import { getBandMembers } from "./database.js"
const allBandMembers = getBandMembers()


document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON A BAND?
        if (itemClicked.id.startsWith("band")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED BAND?
            const [,bandPrimaryKey] = itemClicked.id.split("--")



    // EXPLORER CHAPTER, LOOP THROUGH BAND MEMBERS AND GRAB ANY WITH MATCHING BANDID
    // push their first and last name and bandRole to a new array called MatchingBandMembers

            let matchingBandMembers = []
            for (const bandMember of allBandMembers){
                if (parseInt(bandPrimaryKey) === bandMember.bandID){
                    matchingBandMembers.push(`${bandMember.firstName} ${bandMember.lastName} (${bandMember.bandRole})`)
                }
            }

    //LOOP THROUGH matchingBandMembers AND CREATE A STRING TO THROW IN THE ALERT WINDOW

            let bandMembersString = ''
            for (const member of matchingBandMembers){
                bandMembersString += `${member}\n`
            }



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
                window.alert(`${bandMembersString}${matchingBandName} is booked to play at ${bookedVenuesString}`)
            }

            else{
                window.alert(`${bandMembersString}${matchingBandName} is not booked to play anywhere yet`)
            }

        }
    }
)


