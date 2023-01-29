mapboxgl.accessToken =
  "pk.eyJ1Ijoic2VhaHhpYW5neXUtbnAiLCJhIjoiY2xkaGF5c2ZsMTViNzNvcXpuYzVldWplNSJ9.7r1C2hHCaQ0DVAXwXjsMqQ";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([103.83218766870145, 1.3050242940683745]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: center,
    zoom: 10,
  });
}
