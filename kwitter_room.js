
const firebaseConfig = {
      apiKey: "AIzaSyD1P1bB5QBa8qZIY5WF4vETm6LG-9C6e9k",
      authDomain: "kwitterapp-917a0.firebaseapp.com",
      databaseURL: "https://kwitterapp-917a0-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-917a0",
      storageBucket: "kwitterapp-917a0.appspot.com",
      messagingSenderId: "244126744284",
      appId: "1:244126744284:web:2110ef14c12f540fd43e19",
      measurementId: "G-XSJDWQ7KBY"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

player_name = localStorage.getItem("user_name");
document.getElementById("user").innerHTML = "Welcome" + player_name;

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}