import { bandList } from "./bands.js"
import { venueList } from "./venues.js"
import { bookingsList } from "./bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = 

`
<h1>Sugar Tour</h1>

<article class="bookings">
    <h2>Current Bookings</h2>
    ${bookingsList()}
</article>

<article class="lists">
    <section class="column venue-list">
        <h2>Venues</h2>
        ${venueList()}
    </section>
    <section class="column band-list">
        <h2>Bands</h2>
        ${bandList()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML
