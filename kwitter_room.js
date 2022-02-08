const firebaseConfig = {
    apiKey: "AIzaSyB212kh8IhNxqsVH_dYTpx1J_XzpIgJb_s",
    authDomain: "kwitterproject-66026.firebaseapp.com",
    databaseURL: "https://kwitterproject-66026-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-66026",
    storageBucket: "kwitterproject-66026.appspot.com",
    messagingSenderId: "950119354044",
    appId: "1:950119354044:web:4281c52a711893f2c7cab9",
    measurementId: "G-8S9DYCDZKR"
  };
  
firebase.initialize(firebaseConfig);
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

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
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      });
   });
}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("roon_name")
          window.location = "kwitter_page.html";
}