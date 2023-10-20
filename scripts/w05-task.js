/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    templeList.forEach(temple => {
        var articleElement = document.createElement("article");
        var h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;
        var imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    })
};



/* async getTemples Function using fetch()*/
const getTemples = async ()=>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    // Convert the fetch response into a JavaScript object and assign it to the templeList global variable
    templeList = await response.json();
    displayTemples(templeList);
};
getTemples();

/* reset Function */
const reset = () => {
    const templesElement = document.getElementById("templesElement");

    // Remove all <article> elements inside the templesElement
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
};

/* sortBy Function */

const sortBy = (temples) => {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "utah":
            // Filter for temples located in Utah
            const utahTemples = temples.filter(temple => temple.location.includes("Utah"));
            // Display the filtered temples
            displayTemples(utahTemples);
            break;

        case "nonutah":
            // Filter for temples not located in Utah
            const nonUtahTemples = temples.filter(temple => !temple.location.includes("Utah"));
            // Display the filtered temples
            displayTemples(nonUtahTemples);
            break;

        case "older":
            // Filter for temples dedicated before 1950
            const olderTemples = temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1));
            // Display the filtered temples
            displayTemples(olderTemples);
            break;

        case "all":
            // Display all temples (no filter)
            displayTemples(temples);
            break;

        default:
            console.error("Invalid sorting option.");
    }
    
};



/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    // Call the sortBy function and pass the templeList as an argument
    sortBy(templeList);
});