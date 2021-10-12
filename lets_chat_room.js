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
            row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "lets_chat_page.html";
}

function redirectToRoomName(name){
    localStorage.setItem("room_name",name);
    window.location = "lets_chat_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}