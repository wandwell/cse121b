/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Sariah Wandler",
    photo: { 
        path: "images\\Sariah-Selfie.jpg",
        photoName: `"Profile image of ${this.name}"`,
    },
    favoriteFoods: [
        'Pizza', 
        'Ramen', 
        'Peanut Stew', 
        'Hazelnut Spread', 
        'Waffles', 
        'Cookies', 
        'Cinnamon Steamer'
    ],
    hobbies: [
        'Reading',
        'Hiking',
        'Crochet',
        'Poetry',
        'Collecting Nativities'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Great Falls, MT",
        length: "14 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Billings, MT",
        length: "8 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo.path);
document.querySelector("#photo").setAttribute("alt", myProfile.photo.photoName);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement("dt");
    dt.textContent = placeLived.place;
    let dd = document.createElement("dd");
    dd.textContent = placeLived.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})

