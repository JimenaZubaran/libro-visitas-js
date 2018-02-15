//textArea y p
var textP = document.getElementById("mi-comentario");


//Input textarea (variabley evento)
var textareaText  = document.getElementById("escribiendo-comentario");
textareaText.addEventListener("keyup",visualizarComentario);
//Funcion paravisualizar el texto del textarea en elp
function visualizarComentario(){
  textP.textContent = textareaText.value;
}


//Boton large (variabley evento)
var btnLarge = document.getElementById("btn-large");
btnLarge.addEventListener("click",largeText);
//Funcion letra grande
function largeText(){
  textP.style.fontSize = "100px";
}

//Boton medium (variabley evento)
var btnMedium = document.getElementById("btn-medium");
btnMedium.addEventListener("click",mediumText);
//Funcion letra mediana
function mediumText(){
  textP.style.fontSize = "60px";
}

//Boton small (variabley evento)
var btnSmall = document.getElementById("btn-small");
btnSmall.addEventListener("click",smallText);
//Funcion letra pequena
function smallText(){
  textP.style.fontSize = "30px";
}


//Boton color de letra (variabley evento)
var btnText = document.getElementById("btn-texto");
btnText.addEventListener("click",changeText);
//Funcion color de letra
function changeText(){
  var color = prompt(" qué color de letra quieres (escríbelo en inglés)?");
  textP.style.color = color;
}

//Boton color de fondo (variabley evento)
var btnBack = document.getElementById("btn-fondo");
btnBack.addEventListener("click",backColor);
//Funcion color de letra
function backColor(){
  var background = prompt(" qué color de fondo quieres (escríbelo en inglés)?");
  textP.style.backgroundColor = background;
}

//Boton letra centrada (variabley evento)
var btnCenter = document.getElementById("btn-centro");
btnCenter.addEventListener("click",centerText);
//Funcion letra centrada
function centerText(){
  textP.style.textAlign = "center";
}

//Boton letra izquierda (variabley evento)
var btnLeft = document.getElementById("btn-izquierda");
btnLeft.addEventListener("click",leftText);
//Funcion letra izquiera
function leftText(){
  textP.style.textAlign = "left";
}

//Boton letra derecha (variabley evento)
var btnRight = document.getElementById("btn-derecha");
btnRight.addEventListener("click",rightText);
//Funcion letra derecha
function rightText(){
  textP.style.textAlign = "right";
}

//Boton para agregar comentario (variabley evento)
var btnAdd = document.getElementById("btn-agregar");
btnAdd.addEventListener("click",addComment);
//Funcion agregar
function addComment(){
  // div de comentarios pasados
  var pastComments = document.getElementById("comentarios-pasados");

  //Crear
   var boxComments = document.createElement("div");
   var textComments = document.createElement("p");
//Agregar atributos
  boxComments.classList.add("caja-comentario-pasado");
  textComments.textContent = textareaText.value;
   console.log(textComments);

   //Agregar a html
   boxComments.appendChild(textComments);
   console.log(boxComments);
   pastComments.appendChild(boxComments);
   styleComment(textComments);

}

//Funcion para agarrar atributos del
function styleComment(textComments){
var atributo = textP.getAttribute("style");
console.log(atributo);
textComments.setAttribute("style", atributo);
}
