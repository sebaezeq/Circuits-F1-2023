let map = L.map('map').setView([-34.597909, -58.457870],15)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

document.getElementById('selectCircuit').addEventListener('change',function(e){
    let coordenadas=e.target.value.split(",");
    map.flyTo(coordenadas,15);
})