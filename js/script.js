var map = L.map('map').setView([0,0],2);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{ maxZoom:19 }
).addTo(map);

document.getElementById("scanButton").onclick=function(){

let center = map.getCenter();

L.marker(center)
.addTo(map)
.bindPopup("Possible anomaly")
.openPopup();

};