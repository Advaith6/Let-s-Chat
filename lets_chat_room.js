var firebaseConfig = {
    apiKey: "AIzaSyCn2BBPEzCSW-iJvrt7cA7AZXNqC3P-GJw",
    authDomain: "let-s-chat-cfde8.firebaseapp.com",
    databaseURL: "https://let-s-chat-cfde8-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-cfde8",
    storageBucket: "let-s-chat-cfde8.appspot.com",
    messagingSenderId: "500210968952",
    appId: "1:500210968952:web:31ef3bb447bba6f609808d"
  };
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();
