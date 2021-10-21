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
  
  function send(){
      msg = document.getElementById("msg").nodeValue;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          Like:0
      });
  
      document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
names = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)>";
span_with_tag =  "<span class='glyphicon glypichon-thumbs-up'>Like: " +like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log("updated_likes");

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}