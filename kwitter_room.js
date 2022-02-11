
const firebaseConfig = {
      apiKey: "AIzaSyCU8tF4wNIx5cNed8XYK53Uh2W0MIzbJ34",
      authDomain: "kwitter-d1d89.firebaseapp.com",
      databaseURL: "https://kwitter-d1d89-default-rtdb.firebaseio.com",
      projectId: "kwitter-d1d89",
      storageBucket: "kwitter-d1d89.appspot.com",
      messagingSenderId: "407932204704",
      appId: "1:407932204704:web:80cddeef3357e5dbaf3bc5",
      measurementId: "G-45TE7FJG6W"
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