const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Get map values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng   

//Create map
const map = L.map('mapid', options).setView([lat, lng], 13);


//Create and add tileLayer
L.tileLayer
(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'   
).addTo(map);

//Create Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});


//Create and add marker
L   
.marker([lat, lng], { icon })
.addTo(map)

/* Image Gallery */
function selectImage(event) {
    const button = event.currentTarget;

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => {
        button.classList.remove("active");
    })

    //selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    //atualizar o container da imagem grande
    imageContainer.src = image.src;

    //adicionar a classe .active para este botão
    button.classList.add('active');

}