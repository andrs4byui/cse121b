/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Andres Soruco";
let currentYear = 2023;
let profilePicture = "images/soruco2 - copia.jpg";


/* Step 3 - Element Variables */
let nameElement = docuemnt.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");

let imageElement = docuemnt.getElementsByTagName("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
nameElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */






