let targetEl = document.querySelector(".shows-section");

const showsArr = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021 ",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021 ",
        venue: "Press Club",
        location: "San Francisco, CA"
    },

];

const createMainH1 = () => {
    const h1 = document.createElement("h1");
    h1.classList.add("shows-section__title");
    h1.innerText = "Shows";

    return h1
}

const createTb = () => {
    const table = document.createElement("table");
    table.classList.add("shows");
    return table
}

const createTh = () => {
    const row = document.createElement("tr");
    row.classList.add("shows__head");

    const dateEl = document.createElement("th");
    dateEl.classList.add("shows__head-item");
    dateEl.setAttribute("data-label","date");
    dateEl.innerText = "DATE";
    
    const venueEl = document.createElement("th");
    venueEl.classList.add("shows__head-item");
    venueEl.setAttribute("data-label","venue");
    venueEl.innerText = "VENUE";

    const locationEl = document.createElement("th");
    locationEl.classList.add("shows__head-item");
    locationEl.setAttribute("data-label","location");
    locationEl.innerText = "LOCATION";

    row.appendChild(dateEl);
    row.appendChild(venueEl);
    row.appendChild(locationEl);

    return row
}

const createTr = ({date, venue, location}) => {

    const row = document.createElement("tr");
    row.classList.add("shows__row");

    const dateEl = document.createElement("td");
    dateEl.classList.add("shows__row-item", "shows__row-item--date");
    dateEl.setAttribute("data-label","date");
    dateEl.innerText = date;

    const venueEl = document.createElement("td");
    venueEl.classList.add("shows__row-item");
    venueEl.setAttribute("data-label","venue");
    venueEl.innerText = venue;

    const locationEl = document.createElement("td");
    locationEl.classList.add("shows__row-item");
    locationEl.setAttribute("data-label","location");
    locationEl.innerText = location;

    const buttonEl = document.createElement("td");
    buttonEl.classList.add("shows__row-item");
    const button = document.createElement("button");
    button.classList.add("shows__row-item-btn");
    button.innerText = "BUY TICKETS";
    buttonEl.appendChild(button);

    row.appendChild(dateEl);
    row.appendChild(venueEl);
    row.appendChild(locationEl);
    row.appendChild(buttonEl);

    return row
}
const h1 = createMainH1();
const table = createTb();
const tableHead = createTh();
table.appendChild(tableHead);

const loadShows = showsArr => {
    showsArr.forEach(show => {
        const row = createTr(show);
        console.log(row.innerHTML)
        table.appendChild(row);
    });

    targetEl.appendChild(h1)
    targetEl.appendChild(table)
}

loadShows(showsArr);