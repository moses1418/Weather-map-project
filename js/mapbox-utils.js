mapboxgl.accessToken = MAPBOX_TOKEN;

var map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [ -98.4936, 29.4241],
    zoom: 12
});

let marker;
mapEvent();
let geocoder = setGeocoder();

addGeacoderToMap(geocoder);

function setGeocoder(){
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

function addGeacoderToMap(geocoder){
    map.addControl(geocoder);

    geocoder.on("result", function (event) {
        console.log(event.result.place_name);
        // console.log(event);
        console.log(event.result.geometry.coordinates);

        setMarker(event.result.geometry.coordinates);
        marker.setPopup(displayPopup(event.result.place_name));

        fetchForecast(event.result.geometry.coordinates);


    });

}


function setMarker(point) {

    if (!marker){
        marker = new mapboxgl.Marker().setLngLat(point).addTo(map);
    } else {
        marker.setLngLat(point);
    }

}


function mapEvent() {
    map.on("click", function (event) {
        setMarker(event.lngLat);
        console.log(event.lngLat);

        fetchForecast([event.lngLat.lng, event.lngLat.lat]);

    });
}


function displayPopup(textDetails) {
    return new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);
}












