function onGeoSuccess(position) {
    console.log(position);
}

function onGeoError() {
    alert("Location not found.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);