const database = {

    bands: [
        { 
        name: "The New Doodz", 
        memberCount: 3,
        genre: "country",
        founded: 2022
        },
        { 
            name: "Hoopity Hooplahs", 
            memberCount: 4,
            genre: "punk",
            founded: 1999
        },
        { 
            name: "Jimbos 1manband", 
            memberCount: 1,
            genre: "folk",
            founded: 2010
        }
    ],

    venues: [
        { 
        name: "Pittstainz",
        address: "100 Main Street",
        sqFeet: 3000,
        maxOcupancy: 250
        },
        { 
        name: "That One Place",
        address: "5000 3rd Avenue",
        sqFeet: 3700,
        maxOcupancy: 300
        }
    ],

    bookings: [
        {
        bandName: "Hoopity Hooplahs",
        venueName: "Pittstainz",
        bookDate: 3
        }
 ]

 
}


//EXPORT FUNCTIONS TO COPY EACH ARRAY IN THE DATABASE

export const getBands = () => {
    return database.bands.map(bandObject => ({...bandObject}))
}

export const getVenues = () => {
    return database.venues.map(venueObject => ({...venueObject}))
}

export const getBookings = () => {
    return database.bookings.map(bookingObject => ({...bookingObject}))
}

