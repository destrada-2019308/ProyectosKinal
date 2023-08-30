//Creamos el array o el vector de 15
const listaPalabras = ["guitarra",
"teclado","reloj","tarjeta","tapadera","vaso","pachon","filete","luz","trapo","ventana","puerta","sol","pelota","edificio"]
const palabra = document.querySelector(".palabra-ul");
let palabraActual;
const botonesDelTeclado = document.querySelector(".teclado");


//Creamos una funcion flecha para que nos de una palabra aleatoria
const palabraRandom = () =>{
    //creamos una constante para la lista de palabras
    //con la Clase Math.floor redondeamos el numero ramdom que viene después 
    // y lo multiplicamos por la lista de palabras para que nos tire un numero entre
    //0 y la cantidad de parametros que tenga el array
    // el .length es para contar String, pero también sirve para contar los arreglos
    //que existan en el
    const lista = listaPalabras[Math.floor(Math.random() * listaPalabras.length)]
    palabraActual = lista
    //Probamos que funcione las palabras aleartorias
    console.log(lista);
    palabra.innerHTML = lista.split("").map(() => `<li class="palabra"></li>`).join("");
}

/*
Funciones flecha
const nombreDeLaFuncion = (parametro, parametro2) =>{
    let frase = `Hola ${nombre} ${apellido}! ¿Comó estas?`;
    document.write(frase + "<br>");
}
*/

const presion = (button, palabraPresionada) => {
    if (palabraActual.includes(palabraPresionada)) {
        [...palabraActual].forEach((palabras, index) =>{
            if(palabras === palabraPresionada){
                palabra.querySelectorAll("li")[index].innerText = palabras;
                palabra.querySelectorAll("li")[index].classList.add("guessed");
            }
        })        
    }else {

    }
}

for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
        
    button.innerHTML = String.fromCharCode(i);
    botonesDelTeclado.appendChild(button);
    button.addEventListener("click", e => presion(e.target,String.fromCharCode(i)));
}

palabraRandom();

