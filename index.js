var password = "poke";

function passcheck(){
    if(document.getElementById('pass1').toLowerCase.value != password) {
        alert('Go Fish ____ Bar')
        return false;
    }
    if(document.getElementById('pass1').toLowerCase.value == password) {
        alert('Nicee');
    }
}
