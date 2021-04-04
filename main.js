function addUser() {
    var Name = document.getElementById("Name").value;
    localStorage.setItem("Name", Name);
    window.location = "Chat_Room.html"
}