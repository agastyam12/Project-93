
var firebaseConfig = {
  apiKey: "AIzaSyDv9ZYH5z8nQHocbIRorxe5DectW2mJ8Ow",
  authDomain: "databases-1e33e.firebaseapp.com",
  databaseURL: "https://databases-1e33e-default-rtdb.firebaseio.com",
  projectId: "databases-1e33e",
  storageBucket: "databases-1e33e.appspot.com",
  messagingSenderId: "7661101917",
  appId: "1:7661101917:web:88a52a08c544b09ed5beb4",
  measurementId: "G-8RX4VZW9RZ"
};
 function getData() {
   firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
        childKey  = childSnapshot.key;
        Room_names = childKey;
        //Start code
        //End code
        });
        }
      );
  }
getData();
