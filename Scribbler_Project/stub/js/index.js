var createPostModal = document.getElementById('createPostModal');
var buttonForCreatePost = document.getElementById("buttonForCreatePost");

var closeCreatePost = document.getElementById("closeCreatePost");
buttonForCreatePost.onclick = function(){
    document.getElementById('createPostContent').style.display = 'block';
    createPostModal.style.display = "block";
};

closeCreatePost.onclick = function() {
    createPostModal.style.display = "none";
};