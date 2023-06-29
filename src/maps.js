function initMap() {
  const myLatLng = { lat: -23.71950350883615, lng: -45.42491347147707 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: 'Hello World!',
  });
}

window.initMap = initMap;
