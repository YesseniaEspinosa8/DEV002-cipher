import cipher from './cipher.js';


let formEncriptar = document.getElementById("cifrar");
formEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    const offset = document.getElementById("offset").value
    const mensaje = document.getElementById("mensaje").value
    const textEncode = cipher.encode (parseInt(offset), mensaje)
    console.log(textEncode);
    document.getElementById("mensaje2").value = textEncode;
})

let formDesencriptar = document.getElementById("decifrar");
formDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    const offset = document.getElementById("offset").value
    const mensaje = document.getElementById("mensaje").value
    const textDecode = cipher.decode(parseInt(offset), mensaje)
    console.log(textDecode);
    document.getElementById("mensaje2").value =textDecode;
})



