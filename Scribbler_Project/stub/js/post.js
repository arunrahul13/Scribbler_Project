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
    var inputElement = '<div><br><textarea class="txtBlog" id="txtEditedBlog" rows="10"style="width:99.5%">'+
    getBlogContent+
    '</textarea></div><br>'
    //Update the Div element
    getDiv.innerHTML = inputElement;
  }
  function updateEditedBlog(){
    debugger;
    var editedBlog = document.getElementById('txtEditedBlog');
  
    var textEdited = (editedBlog.value).toString();
    
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
    var pElement = '<div id="commentdiv"><p class="overflow-visible eachcomment">'+ x + '</p></div>';
    document.getElementById("txtCommentCommentPost").value="";
  var getDiv = document.getElementById('listAllComments');
  getDiv.innerHTML = pElement + getDiv.innerHTML;}
  
  
}
