// This async function fetches data from a JSON file and displays it.
async function fetchData() {
    try {
        // Attempt to fetch data from the specified JSON file (relative path).
        const response = await fetch("../data/countries.json");
        // Convert the response to a JavaScript object.
        const result = await response.json();
        // Log the result (data) to the console for debugging purposes.
        console.log(result);
        // Call the displayCountryNames function to display the country names using the fetched data.
        displayCountryCard(result);
    } catch (error) {
        // If any errors occur during the fetch or data processing, log the error to the console.
        console.error(error);
    }
}

// Call the fetchData function to initiate the data fetching and display.
fetchData();


let displayCountryCard = async(countries) => {
    const countriesDiv = document.getElementById("countries");
    if (countriesDiv) {
        const articleElement = document.createElement("article");
        articleElement.setAttribute("class", "countries-article")
        countries.forEach((country) => {
            const cardDiv = document.createElement("div");
            cardDiv.setAttribute("class", "country-card")
            const h3Element = document.createElement("h3");
            //h3Element.textContent = country.country;
            // Create an anchor element with a link to the country (you can customize the link URL)
            const a = document.createElement("a");
            a.textContent = country.country;
            a.href = "https://en.wikipedia.org/wiki/" + country.country; // Replace with the actual URL
            a.setAttribute("target", "_blank")
            // Append the anchor to the h3
            h3Element.appendChild(a);
            const featuresDiv = document.createElement("div");
            featuresDiv.setAttribute("class", "features-div")
            for (let i = 0; i < country.features.length; i++) {
                const singleFeatureDiv = document.createElement("div");
                const p = document.createElement("p");
                p.textContent = country.features[i].name;
                const img = document.createElement("img");
                img.alt = country.features[i].name;
                img.src = country.features[i].imagePath;
                singleFeatureDiv.appendChild(p);
                singleFeatureDiv.appendChild(img);
                featuresDiv.appendChild(singleFeatureDiv);
            }
            cardDiv.appendChild(h3Element);
            cardDiv.appendChild(featuresDiv);
            articleElement.appendChild(cardDiv)
        })
        countriesDiv.appendChild(articleElement);
    }
    else {
        console.error("Element with ID 'countries' not found.");
    }
}