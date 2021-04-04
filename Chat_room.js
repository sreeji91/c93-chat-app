var firebaseConfig = {
    apiKey: "AIzaSyCY7VafhFdJJaTCmKtCAczWyhc-l_ptviE",
    authDomain: "let-s-chat-a26c0.firebaseapp.com",
    databaseURL: "https://let-s-chat-a26c0-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-a26c0",
    storageBucket: "let-s-chat-a26c0.appspot.com",
    messagingSenderId: "278598108503",
    appId: "1:278598108503:web:6eeaab697bde687026ea12",
    measurementId: "G-ZCKDWQNLMF"
};
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("Name");
document.getElementById("Greetings").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    roomName = document.getElementById("roomName").value;
    firebase.database().ref("/").child(roomName).update({
        purpose: "Creating a New Chat Room"
    });
    localStorage.setItem("Room Name", roomName);
    window.location = "Chat_Place.html";
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey =
                    childSnapshot.key;
                Room_names = childKey;
                console.log(Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
                b
            });
        });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("Room Name", name);
    window.location = "Chat_Place.html";
}
function logout(){
    localStorage.removeItem("Room Name");
    localStorage.removeItem("Name");
    window.location = "index.html";