function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function change(element){
    var a = element.innerHTML;
    switch(a){
        case "My works":
            document.getElementById("h1").innerHTML = "My works"
            $("h1").animate({opacity: '0'});
            $("h1").animate({opacity: '1'}, "slow");
            break;
        case "About Us":
            document.getElementById("h1").innerHTML = "About Us"
            $("h1").animate({opacity: '0'});
            $("h1").animate({opacity: '1'}, "slow");
            break;
    }
}
function contact_form(){
    document.querySelector(".inf").style.display = "none";
    document.querySelector(".contact_form").style.display = "block";
}
function sended(){
    document.querySelector(".inf").style.display = "block";
    document.querySelector(".contact_form").style.display = "none";
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("message").value = "";
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var container = document.getElementById("BtnContainer");
var btnss = container.getElementsByClassName("bt");
for (var i = 0; i < btnss.length; i++) {
  btnss[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("acti");
    current[0].className = current[0].className.replace(" acti", "");
    this.className += " acti";
  });
}


let map;

function initMap() {
    var options = {
        center: { lat: 43.2389496, lng: 76.889709 },
        zoom: 12,
        styles: [
          {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "saturation": 36
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 40
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  },
                  {
                      "weight": 1.2
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 21
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 29
                  },
                  {
                      "weight": 0.2
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 18
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 19
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#213eb8"
                  },
                  {
                      "lightness": 17
                  }
              ]
          }
      ]
    }
    var icon = {
        url: "https://www.freeiconspng.com/thumbs/bookstore-icon/book-store-icon-31.png",
        scaledSize: new google.maps.Size(25, 25),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    }
    var icon2 = {
        url: "https://i.pinimg.com/originals/2c/fc/93/2cfc93d7665f5d7728782700e50596e3.png",
        scaledSize: new google.maps.Size(25, 25),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    }
    var icon3 = {
        url: "https://cdn3.iconfinder.com/data/icons/art-supplies-1/187/art_supplies_paint_palette-512.png",
        scaledSize: new google.maps.Size(25, 25),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    }
   var map = new google.maps.Map(document.getElementById("map"), options);
   
    var marker = new google.maps.Marker({
        position: {lat: 43.218618296816125, lng: 76.92843447837289},
        map: map,
        title: "Meloman",
        icon: icon
    });
    var marker2 = new google.maps.Marker({
        position: {lat: 43.22466269671035, lng: 76.96569411567222},
        map: map,
        title: "Marwin",
        icon: icon2
    }); 
    var marker3 = new google.maps.Marker({
        position: {lat: 43.257433255121434, lng: 76.9496286509895},
        map: map,
        title: "Галерея",
        icon: icon3
    }); 
   
   
    var contentString =
          '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h5 id="firstHeading" class="firstHeading">Meloman</h5>' +
          '<div id="bodyContent">' +
          "<p><b>Meloman</b>,  " + "<br>" +
          "Online store of books, video games, etc. " + "<br>" +
          "Al-Farabi Ave., 77/8, 3rd Floor, Almaty" + "<br>" +
          "open until 22:00 </p>" +
          "</div>" +
          "</div>";
          marker.addListener("click", () => {
            infowindow.open(map, marker);
          });
          var infowindow = new google.maps.InfoWindow({
            content: contentString,
          });
          
          
        var contentString2 =
              '<div id="content">' +
              '<div id="siteNotice">' +
              "</div>" +
              '<h5 id="firstHeading" class="firstHeading">Marwin</h5>' +
              '<div id="bodyContent">' +
              "<p><b>Marwin</b>,  " + "<br>" +
              "Online store of books, video games, etc. " + "<br>" +
              "SEC Dostyk Plaza, Samal-2, 111, Dostyk avenue ug, Almaty" + "<br>" +
              "open until 22:00 </p>" +
              "</div>" +
              "</div>";
              marker2.addListener("click", () => {
                infowindow2.open(map, marker2);
              });
              var infowindow2 = new google.maps.InfoWindow({
                content: contentString2,
              });

              var contentString3 =
              '<div id="content">' +
              '<div id="siteNotice">' +
              "</div>" +
              '<h5 id="firstHeading" class="firstHeading">Галерея</h5>' +
              '<div id="bodyContent">' +
              "<p><b>Галерея</b>,  " + "<br>" +
              "Art store " + "<br>" +
              "Kazybek Bi street 50" + "<br>" +
              "open until 22:00 </p>" +
              "</div>" +
              "</div>";
              marker3.addListener("click", () => {
                infowindow3.open(map, marker3);
              });
              var infowindow3 = new google.maps.InfoWindow({
                content: contentString3,
              });


            var destinations = new google.maps.MVCArray();
            destinations.push (new google.maps.LatLng(43.218618296816125, 76.92843447837289));

            var polylineOptions = {path: destinations,
                strokeColor: "#777778",
                strokeWeight: 5 
            };
            var polyline = new google.maps.Polyline( polylineOptions);
            polyline.setMap(map);

            google.maps.event.addListener(map, 'click', function(e){
                var currentPath = polyline.getPath();
                currentPath.push(e.latLng);
            });
}

