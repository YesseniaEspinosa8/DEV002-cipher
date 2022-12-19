import cipher from './cipher.js';


let formEncriptar  = document.getElementById("cifrar");
formEncriptar.addEventListener("click",(e)=> {
    e.preventDefault();
    const offset = document.getElementById("offset").value 
    const mensaje = document.getElementById("mensaje").value
    const textEncode= cipher.encode(offset,mensaje)
    console.log(textEncode);
}) 

let formDesencriptar = document.getElementById("decifrar");
formDesencriptar.addEventListener("click", (e)=> {
    e.preventDefault();
    const offset = document.getElementById("offset").value
    const mensaje = document.getElementById("mensaje").value
    const textDecode = cipher.decode(offset,mensaje)
    console.log(textDecode);
})



