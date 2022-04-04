const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

//unspalshApi
const count = 10;
const apiKey = 'API_KEY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//create elements for photos
function displayPhotos() {
    photosArray.forEach((photo) => {
        //anchor to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank'); //open in new tab

        //create image
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        //add image to anchor
        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}
//Get photos
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        //error
    }
}

//on load
getPhotos(); 