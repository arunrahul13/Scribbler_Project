 function toggleEditSave() {
     if( document.getElementById('btn1').innerText=='Edit'){
        document.getElementById('btn1').innerText='Save'; 
        enableEditableText();
     }else{
        document.getElementById('btn1').innerText='Edit'; 
        updateEditedBlog();
     }
 
};

function enableEditableText(){
    var getBlogContentEle = document.getElementById('blogBody');
    var getBlogContent = getBlogContentEle.innerText;
  
    //Div element
    var getDiv = document.getElementById('blogBodyId');
    //Create a input element
    var inputElement = '<textarea class="txtBlog" id="txtEditedBlog" rows="10" cols="220">'+
    getBlogContent+
    '</textarea>'
    //Update the Div element
    getDiv.innerHTML = inputElement;
  }
  function updateEditedBlog(){
    var editedBlog = document.getElementById('txtEditedBlog');
  
    var textEdited = (editedBlog.innerHTML).toString();
    
    var pElement = '<p id="blogBody">'+
    textEdited+
    '</p>';
    var getDiv = document.getElementById('blogBodyId');
    getDiv.innerHTML=pElement;
  
  }
var x=1;
function toggleLike() {
    document.getElementById('btn2').innerText='Liked!';
    if(x==1)
    document.getElementById('counterliked').innerText=x++ + ' person likes this!'; 
    else
    document.getElementById('counterliked').innerText=x++ + ' people like this!';
};