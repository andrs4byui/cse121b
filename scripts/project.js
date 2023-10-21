async function fetchData() {
    try {
    	const response = await fetch("../data/countries.json");
    	const result = await response.json();
    	console.log(result);
        displayCountryNames(result);
    } catch (error) {
    	console.error(error);
    }
}
fetchData();


function displayCountryNames(countries) {
    const countriesDiv = document.getElementById("countries");
    if (countriesDiv) {
        // Create an unordered list element to hold the country names
        const ul = document.createElement("ul");
        // Iterate through the list of countries
        countries.forEach((country) => {
            // Create a list item for each country
            const h3 = document.createElement("h3");
            // Create an anchor element with a link to the country (you can customize the link URL)
            const a = document.createElement("a");
            a.textContent = country.country;
            a.href = "https://en.wikipedia.org/wiki/" + country.country; // Replace with the actual URL
            // Append the anchor to the h3
            h3.appendChild(a);
            // Append the h3 to the unordered list
            ul.appendChild(h3);
        });
        // Append the unordered list to the "countries" div
        countriesDiv.appendChild(ul);
    } else {
        console.error("Element with ID 'countries' not found.");
    }
}



