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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });

      document.getElementById("msg").value="";
}
