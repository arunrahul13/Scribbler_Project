

var binFunctions = function(numberOfPosts) {

    for ( var i = 0; i < numberOfPosts; i++) {
        // Get the trash modal
        var modal = document.getElementsByClassName('trash-modal')[i];

        // Get the div that opens the modal
        var div = document.getElementsByClassName("post-trash")[i];

        // Get the <span> element that closes the modal
        var close = document.getElementsByClassName("trash-modal-button-no")[i];
        var close1 = document.getElementsByClassName("trash-modal-button-yes")[i];
        // When the user clicks on the trash icon, open the modal 
       


        div.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on `No` button, close the modal
        close.onclick = function() {
            modal.style.display = "none";
        }

        close1.onclick = function() {
            modal.style.display = "none";
        }

      
       }
    }




    




binFunctions(5)

function navigateToPost() {
    location.href = "post.html";
}