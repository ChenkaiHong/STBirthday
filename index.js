var password = "poke";

function passcheck(){
    if(document.getElementById("pass1").value != password) {
        alert("Go Fish ____ Bar")
        return false;
    }
    if(document.getElementById("pass1").value == password) {
        alert("Nicee");
    }
}
