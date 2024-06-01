function savedata () {
    var firstname = document.getElementById("fname").value;
    sessionStorage.firstname = firstname;
}

function init () {
    var formall = document.getElementById("form");
    formall.onsubmit = savedata;
}

window.onload = init;