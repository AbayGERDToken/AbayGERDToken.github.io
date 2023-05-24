

var firebaseConfig = {
apiKey: "AIzaSyBMvYTY58Lg8Ir437cXS_6LLsRoGSBC3kI",
authDomain: "abaygerdtoken-fb1e5.firebaseapp.com",
projectId: "abaygerdtoken-fb1e5",
storageBucket: "abaygerdtoken-fb1e5.appspot.com",
messagingSenderId: "309976612278",
appId: "1:309976612278:web:b529621a221c9b750a1517",
measurementId: "G-9SMFLKM4GB"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

$(document).ready(function() {
  var timestamp = new Date();

  $.get("https://ipinfo.io", function(response) {
    var city = response.city;
    var country = response.country;

    db.collection("visitorData").add({
      timestamp: firebase.firestore.Timestamp.fromDate(new Date(timestamp)),
      city: city,
      country: country
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

  }, "jsonp");
});