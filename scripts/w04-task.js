/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = {
    name : "Andres Soruco",
    photo : "./images/soruco2-copia.jpg",
    favoriteFoods : [
        "Pastel de fideo", 
        "Lasagna", 
        "Pizza", 
        "Pie de Limon",
        "Lemon Juice"
    ],
    hobbies : [
        "Voleyball",
        "Basquetball",
        "Watch Series",
        "Chruch service"
    ],
    placesLived : [],
};


/* Populate Profile Object with placesLive objects */
let boliviaFlag = "./images/bolivia_flag.png"
let peruFlag = "./images/peru_flag.png"
let chileFlag = "./images/chile_flag.png"
myProfile.placesLived.push({
    flag: boliviaFlag,
    place : "Tupiza",
    lenght : "17 years"
}
);
myProfile.placesLived.push({
    flag :  boliviaFlag,
    place : "Tarija",
    lenght : "5 years"
}
);
myProfile.placesLived.push({
    flag : peruFlag,
    place : "Peru",
    lenght : "2 Years"
}
);
myProfile.placesLived.push({
    flag: chileFlag,
    place : "Calama",
    lenght : "1 year"
}
);

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").setAttribute("alt", myProfile.name);
document.getElementById("photo").setAttribute("src", myProfile.photo);


/* Favorite Foods List*/
const favoriteFoodsUl= document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
    let listElement = document.createElement("li");
    listElement.textContent = food;
    favoriteFoodsUl.append(listElement);
});


/* Hobbies List */
const hobbiesUl = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobbie => {
    let listElement = document.createElement("li");
    listElement.textContent = hobbie;
    hobbiesUl.append(listElement);
});

/* Places Lived DataList */
const placesLivedDl = document.getElementById("places-lived");
myProfile.placesLived.forEach(place => {
    let imgIcon = document.createElement("img");
    imgIcon.setAttribute("src", place.flag)
    imgIcon.setAttribute("style", "max-width : 5%")
    let dtElement = document.createElement("dt");
    dtElement.textContent = place.place;
    let ddElement = document.createElement("dd");
    ddElement.textContent = place.lenght;
    placesLivedDl.append(imgIcon);
    placesLivedDl.append(dtElement);
    placesLivedDl.append(ddElement);

    ddElement.setAttribute("style", "font-size: small; padding-bottom: 5px;")
});


