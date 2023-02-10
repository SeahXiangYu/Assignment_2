mapboxgl.accessToken =
  "pk.eyJ1Ijoic2VhaHhpYW5neXUtbnAiLCJhIjoiY2xkaGF5c2ZsMTViNzNvcXpuYzVldWplNSJ9.7r1C2hHCaQ0DVAXwXjsMqQ";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([103.83839082284537, 1.301453591341515]);
}

function toSingapore() {
  setupMap([103.83839082284537, 1.301453591341515]);
}

function toMalaysia() {
  setupMap([101.50794176822167, 2.8132757331105274]);
}

function toJapan() {
  setupMap([135.7850891990488, 34.995084533844796]);
}

function toKorea() {
  setupMap([127.05877708420171, 37.58408667175697]);
}

function toGermany() {
  setupMap([10.791526460599616, 52.427462346378725]);
}

function toFrance() {
  setupMap([2.2945027443635087, 48.85853236388674]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: center,
    zoom: 16,
  });
}
