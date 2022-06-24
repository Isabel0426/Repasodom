//traigo una etiqueta del html
let titulo=document.getElementById("titulo")
console.log(titulo)

titulo.textContent = "CHAO"
let foto = document.getElementById("foto")
foto.src = "https://upload.wikimedia.org/wikipedia/commons/9/9a/Escudo_de_Atl%C3%A9tico_Nacional.png"

//Agregando estilos 
titulo.classList.add("letra")

//Detectando Eventos
let boton=document.getElementById("boton")
boton-addEventListener("click", function(){
console.log("hice click")
})

//detecta el evento 
//Llamar una funcion anonima: funcion no tiene nombre y se ejecuta de inmediato 