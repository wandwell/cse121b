/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Sariah Wandler";
let currentYear ="2023";
let profilePicture = "images/Sariah-Selfie.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img')

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.innerText = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let foodsFavorite = ['Pizza', 'Ramen', 'Peanut Stew', 'Hazelnut Spread', 'Waffles', 'Cookies', 'Cinnamon Steamer']

foodElement.innerHTML = foodsFavorite;

let food2 = 'Cranberry Peach Pie';

foodsFavorite.push(food2);

foodElement.innerHTML += `<br>${foodsFavorite}`;

foodsFavorite.shift();

foodElement.innerHTML += `<br>${foodsFavorite}`;

foodsFavorite.pop();

foodElement.innerHTML += `<br>${foodsFavorite}`;







