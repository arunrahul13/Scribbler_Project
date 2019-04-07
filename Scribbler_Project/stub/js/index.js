var createPostModal = document.getElementById('createPostModal');
var btn3 = document.getElementById("buttonForCreatePost");

var span2 = document.getElementsByClassName("close")[2];
btn3.onclick = function(){
    document.getElementById('createPostModal').style.display = 'block';
    document.getElementById('signInContent').style.display = 'none';
    document.getElementById('signUpContent').style.display = 'none';
    createPostModal.style.display = 'block';
};

span2.onclick = function() {
    createPostModal.style.display = "none";
};

