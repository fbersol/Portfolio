document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    updateDate();
    getLocation();
});

function updateTime() {
    var timeElement = document.getElementById('time');
    setInterval(function() {
        var now = new Date();
        var timeString = now.toLocaleTimeString();
        timeElement.textContent = 'Time: ' + timeString;
    }, 1000);
}

function updateDate() {
    var dateElement = document.getElementById('date');
    setInterval(function() {
        var now = new Date();
        var dateString = now.toDateString();
        dateElement.textContent = 'Date: ' + dateString;
    }, 1000);
}

function getLocation() {
    var locationElement = document.getElementById('location');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            locationElement.textContent = 'Location: ' + latitude + ', ' + longitude;
        });
    } else {
        locationElement.textContent = 'Geolocation is not supported by this browser.';
    }
}
