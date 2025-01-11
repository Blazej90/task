var map = L.map("map").setView([54.0, 18.0], 8);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var marker1 = L.marker([54.352, 18.646]).addTo(map);
marker1.bindPopup("<b>Gdańsk</b><br>Stolica Pomorza").openPopup();

var marker2 = L.marker([54.555, 18.29]).addTo(map);
marker2.bindPopup("<b>Sopot</b><br>Kurort nadmorski");

var marker3 = L.marker([54.364, 18.701]).addTo(map);
marker3.bindPopup("<b>Gdynia</b><br>Port i miasto nadmorskie");
