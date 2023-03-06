const database = {

    bands: [
        { 
        id: 1,
        name: "The New Doodz", 
        memberCount: 3,
        genre: "country",
        founded: 2022
        },
        { 
        id: 2,
        name: "Hoopity Hooplahs", 
        memberCount: 4,
        genre: "punk",
        founded: 1999
        },
        { 
        id: 3,
        name: "Jimbos 1manband", 
        memberCount: 1,
        genre: "folk",
        founded: 2010
        }
    ],

    venues: [
        { 
        id: 1,
        name: "Pittstainz",
        address: "100 Main Street",
        sqFeet: 3000,
        maxOcupancy: 250
        },
        { 
        id: 2,
        name: "That One Place",
        address: "5000 3rd Avenue",
        sqFeet: 3700,
        maxOcupancy: 300
        }
    ],

    bookings: [
        {
        id: 1,
        bandID: 2,
        venueID: 1,
        bandName: "Hoopity Hooplahs",
        venueName: "Pittstainz",
        bookDate: 1612638112396
        },
        {
        id: 2,
        bandID: 1,
        venueID: 2,
        bandName: "The New Doodz",
        venueName: "That One Place",
        bookDate: 1614528112396
        },
        {
        id: 3,
        bandID: 2,
        venueID: 2,
        bandName: "Hoopity Hooplahs",
        venueName: "That One Place",
        bookDate: 1614598112396
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

