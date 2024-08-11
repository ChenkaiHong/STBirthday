var password = "poke";
var password1 = "Poke";

function passcheck(){
    if(document.getElementById('pass1').value !== password || document.getElementById('pass1').value !== password1) {
        alert("Go Fish ____ Bar")
        return false;
    }
    if(document.getElementById('pass1').value === password || document.getElementById('pass1').value === password1) {
        alert('Nicee');
        return true;
    }
}
