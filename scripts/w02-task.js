/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Andres Soruco";
const currentYear = 2023;
const profilePicture = "images/soruco2-copia.jpg";


/*Step 3 - Element Variables */

const nameElement = docuemnt.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = docuemnt.getElementsByTagName("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
nameElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */






