
const favoritesInput = document.querySelector('#favorites-input');
const locationInput = document.querySelector('#location-input');
const button = document.querySelector('#btn');
const container = document.querySelector('#container');

button.addEventListener('click', () => {
    
    if (favoritesInput.value == "") {
        alert('You need a favorite thing!');
    } 
    else if (locationInput.value == "") {
        alert('You need a location!');
    } 
    else {
        let favorite = favoritesInput.value;
        let location = locationInput.value;
        let sentence = `I can purchase ${favorite} at ${location}`;

        let paragraph = document.createElement('p');
        paragraph.textContent = sentence;

        container.appendChild(paragraph);

        favoritesInput.value = " ";
        locationInput.value = " ";
        favoritesInput.autofocus = true;
    }
})