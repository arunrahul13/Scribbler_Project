 function toggleEditSave() {
     if( document.getElementById('button1').innerText=='Edit'){
        document.getElementById('button1').innerText='Save'; 
        enableEditableText();
     }else{
        document.getElementById('button1').innerText='Edit'; 
        updateEditedBlog();
     }
 
};

function enableEditableText(){
    var getBlogContentEle = document.getElementById('blogBody');
    var getBlogContent = getBlogContentEle.innerText;
  
    //Div element
    var getDiv = document.getElementById('blogBodyId');
    //Create a input element
    var inputElement = '<div><textarea class="txtBlog" id="txtEditedBlog" rows="10"style="width:99%">'+
    getBlogContent+
    '</textarea></div>'
    //Update the Div element
    getDiv.innerHTML = inputElement;
  }
  function updateEditedBlog(){
    var editedBlog = document.getElementById('txtEditedBlog');
  
    var textEdited = (editedBlog.innerHTML).toString();
    debugger;
    var pElement = '<p id="blogBody">'+
    textEdited+
    '</p>';
    var getDiv = document.getElementById('blogBodyId');
    getDiv.innerHTML=pElement;
  
  }
var x=1;
function toggleLike() {
    document.getElementById('button2').innerText='Liked!';
    if(x==1)
    document.getElementById('counterliked').innerText=x++ + ' person likes this!'; 
    else
    document.getElementById('counterliked').innerText=x++ + ' people like this!';
};

function addComment(){
  console.log("Inside add comment");
  var x = document.getElementById("txtCommentCommentPost").addEventListener("onchange", function(){
    document.getElementById("txtCommentCommentPost").innerHTML;
  });

  var x = document.getElementById("txtCommentCommentPost").value;
  if(x!=""){
    console.log(x);  
    var pElement = '<div style="background-color: gray;width:70%;flex-flow:row wrap; width: 53%; display: flex; justify-content: center;"><p style="background: white; padding: 15px; width: 80%; margin-bottom: -5px;">'+ x + '</p></div>';
  var getDiv = document.getElementById('listAllComments');
  getDiv.innerHTML = pElement + getDiv.innerHTML;}
  
  
}
