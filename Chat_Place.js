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

Username = localStorage.getItem("Name");
Room_Name = localStorage.getItem("Room Name");

function Send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(Room_Name).push({
        Name: Username,
        Likes: 0,
        Message: msg
    });

    document.getElementById("msg").value = "";
}


function logout(){
    localStorage.removeItem("Room Name");
    localStorage.removeItem("Name");
    window.location = "index.html";
}

function back(){
    window.location = "Chat Room.html"
}