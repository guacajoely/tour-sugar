const database = {

    bands: [
        { name: "Hoopity Hooplahs", 
        memberCount: 4,
        genre: "punk",
        founded: 1999
        },

    ],

    venues: [
        { name: "Pittstainz",
        address: "100 main st",
        sqFeet: 1000,
        maxOcupancy: 40
    },

    ],

    bookings: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com"
    }, 
    {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org"
    }, 
 ]

 
}

export const getBands = () => {
    return database.walkers.map(walkerObject => ({...walkerObject}))
}

export const getVenues = () => {
    return database.pets.map(petObject => ({...petObject}))
}

export const getBookings = () => {
    return database.cities.map(cityObject => ({...cityObject}))
}

