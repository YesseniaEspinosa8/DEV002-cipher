import cipher from './cipher.js';
console.log(cipher)
// Obtener el elemento imput (clave)
let key = document.getElementById("key");
// Obtener el elemento textarea
let textUser = document.getElementById("TextToEncrypt");
// Agregar escuchador al textarea
textUser.addEventListener("keydown", checkChar);
// Obetner el elemento p (resultado)
let containerTxtResult = document.getElementById("result");

// Obtener el elemento button ENCRYPT
let btnEncrypt= document.getElementById ("btnEncrypt");


console.log(cipher);
