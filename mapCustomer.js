function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            console.log(lat);
            console.log(lng);
            initMap(lat, lng);
        });

    }
}

function initMap(lat, lng) {
    var uluru = { lat: lat, lng: lng };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        draggable: true,
        map: map
    });

    google.maps.event.addListener(marker, 'dragend', function () {
        map.setCenter(this.getPosition()); // Set map center to marker position
    });

    google.maps.event.addListener(map, 'dragend', function () {
        marker.setPosition(this.getCenter()); // set marker position to map center
    });

}

function btnNext(){
    window.location.href="regisCustomer.html";
}

getLocation();

