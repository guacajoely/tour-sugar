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
        },
        { 
        id: 3,
        name: "The Office",
        address: "505 8th Street",
        sqFeet: 2000,
        maxOcupancy: 120
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
        
    ],
        
//EXPLORER CHAPTER - ADDING bandMembers ARRAY
    bandMembers: [
        { 
        id: 1,
        firstName: "Jimmy", 
        lastName: "Jackson", 
        yearBorn: 2000, 
        bandRole: "Lead Singer",
        bandID: 1
        },
        { 
        id: 2,
        firstName: "Jimbo", 
        lastName: "Henderson", 
        yearBorn: 1999, 
        bandRole: "Guitar",
        bandID: 1
        },
        { 
        id: 3,
        firstName: "James", 
        lastName: "Jameson", 
        yearBorn: 2001, 
        bandRole: "Drums",
        bandID: 1
        },
        { 
        id: 4,
        firstName: "Michael", 
        lastName: "Smith", 
        yearBorn: 1982, 
        bandRole: "Plays literally everything",
        bandID: 3
        },
        { 
        id: 5,
        firstName: "John", 
        lastName: "Johnson", 
        yearBorn: 1980, 
        bandRole: "Lead Singer",
        bandID: 2
        },
        { 
        id: 6,
        firstName: "Dick", 
        lastName: "Johnson", 
        yearBorn: 1982, 
        bandRole: "Guitar",
        bandID: 2
        },
        { 
        id: 7,
        firstName: "Barry", 
        lastName: "Little", 
        yearBorn: 1981, 
        bandRole: "Bass",
        bandID: 2
        },
        { 
        id: 8,
        firstName: "Terry", 
        lastName: "Smith", 
        yearBorn: 1979, 
        bandRole: "Drums",
        bandID: 2
        },
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


//EXPLORER CHAPTER - ADDING EXPORT FOR NEW bandMembers ARRAY
export const getBandMembers = () => {
    return database.bandMembers.map(bandMemberObject => ({...bandMemberObject}))
}

