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
  
firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
        });

        document.getElementById("msg").value = "";
    }

    function getData() { firebase.database().ref}("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)  { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        
    }})})