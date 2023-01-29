mapboxgl.accessToken =
  "pk.eyJ1Ijoic2VhaHhpYW5neXUtbnAiLCJhIjoiY2xkaGF5c2ZsMTViNzNvcXpuYzVldWplNSJ9.7r1C2hHCaQ0DVAXwXjsMqQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
