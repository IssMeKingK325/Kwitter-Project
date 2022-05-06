
var firebaseConfig = {
      apiKey: "AIzaSyAnANgrFbH05k1wuoOhNFmHYKYysXWsM0o",
      authDomain: "kwitter-2c9e3.firebaseapp.com",
      databaseURL: "https://kwitter-2c9e3-default-rtdb.firebaseio.com",
      projectId: "kwitter-2c9e3",
      storageBucket: "kwitter-2c9e3.appspot.com",
      messagingSenderId: "332832050700",
      appId: "1:332832050700:web:0f97298ab3402d9930a829"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
         room_name = document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose: "adding room name"
         });
         localStorage.setItem("room_name", room_name);
         window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>"
       document.getElementById("output").innerHTML += row;

      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_room.html";
}
