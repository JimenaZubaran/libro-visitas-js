var commentsData = [
  {
    content : "hola",
    style: {
      color : "blue",
      backgroundColor : "red",
      fontSize : "40px"
    }
  },
  {
    content : "adios",
    style: {
      color : "yellow",
      backgroundColor : "black",
      fontSize : "20px"
    }
  },
];

console.log(commentsData);


var pastComments = document.getElementById("comentarios-pasados"); // caja donde van los comentarios de array

//Funcion para pintar dummy data en html
function drawDataCommets(){
console.log(commentsData);
pastComments.innerHTML = " ";
for (var i = 0; i < commentsData.length; i ++){ // recorrer data
  console.log(commentsData[i]); // imprime dos objetos con su info particular
  var divDom = creatDomCommentsWithData(commentsData[i]);
  console.log(divDom);
   pastComments.appendChild(divDom);
  }
}

// crear data nueva con DOM
function creatDomCommentsWithData(data){
  var contentComment = data.content; // var contentComment = commentsData[i].content;
  console.log(contentComment);
  var commentContainerDom = document.createElement("div");
  var btnDelete = document.createElement("button");
  commentContainerDom.innerHTML = contentComment;
  commentContainerDom.className = "caja-comentario-pasado";
  btnDelete.innerHTML = "X";
  btnDelete.className = "btn-delete";
//btnDelete.setAttribute("id","button-delete");
  btnDelete.style.fontSize = "45px"
  commentContainerDom.appendChild(btnDelete);
  Object.assign ( commentContainerDom.style, data.style);
  return commentContainerDom;
  console.log(commentContainerDom);
}

var btnAddComment = document.getElementById("btn-agregar");
btnAddComment.addEventListener("click",addNewComment);

function addNewComment() {
  var textP = document.getElementById("mi-comentario");
  var  newCommenTextP = textP.innerHTML;
  console.log(newCommenTextP);
  newComment = {content : null, style : {}};
  newComment.content = newCommenTextP;
  //newComment.style.fontSize = textP.style.fontSize;
  //newComment.style.color = textP.style.color;
  //newComment.style.backgroundColor = textP.style.backgroundColor;
  Object.assign(newComment.style, textP.style);
  commentsData.unshift(newComment);
  drawDataCommets()
}


var btnDelete = document.getElementsByClassName("btn-delete");
console.log(btnDelete);
//var btnId = document.getElementById("button-delete");
//console.log(btnId);


btnDelete.addEventListener("click", deleteButtonComment);
function deleteButtonComment(){
  var boxPasstComment = document.getElementsByClassName("caja-comentario-pasado");
  boxPasstComment.style.display = "none";
}
