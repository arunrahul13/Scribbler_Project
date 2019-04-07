var modal = document.getElementById('myModal');

var btn1 = document.getElementById("buttonForSignIn");
var btn2 = document.getElementById("buttonForSignUp");

var anc = document.getElementsByTagName('a')[0];

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];

btn1.onclick = function() {
    document.getElementById('signInContent').style.display='block';
    document.getElementById('signUpContent').style.display='none';
    modal.style.display='block';
};

btn2.onclick = function() {
    document.getElementById('signInContent').style.display='none';
    document.getElementById('signUpContent').style.display='block';
    modal.style.display = "block";
};

anc.onclick = function(){
    document.getElementById('signUpContent').style.display = 'block';
    document.getElementById('signInContent').style.display = 'none';
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};
span1.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
