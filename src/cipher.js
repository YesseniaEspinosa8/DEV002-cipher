const cipher = {
  encode: function (offset, string) {
    console.log(offset)
    console.log(typeof offset)
    if (typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError("error de parámetros");
    }
    let textEncode = "";
    for (let index = 0; index < string.length; index++) {
      let cifrar = string.charCodeAt(index);
      let decifrar;
      if (cifrar < 65 || cifrar > 90) {
        decifrar = String.fromCharCode(cifrar);
        textEncode += decifrar;

      } else {
        let mensajeEcriptado = (cifrar - 65 + offset) % 26 + 65;
        decifrar = String.fromCharCode(mensajeEcriptado);
        textEncode = textEncode + decifrar;
      }
    }
    return textEncode;
  },


  decode: function (offset, string) {
    console.log(typeof offset)
    if (typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError();
    }
    let textDecode = "";
    for (let index = 0; index < string.length; index++) {
      let cifrar = string.charCodeAt(index);
      let decifrar;
      if (cifrar < 65 || cifrar > 90) {
        decifrar = String.fromCharCode(cifrar);
        textDecode += decifrar;

      } else {
        let mensajeEcriptado = (cifrar - 90 - offset) % 26 + 90;
        decifrar = String.fromCharCode(mensajeEcriptado);
        textDecode = textDecode + decifrar;

      }
    }
    return textDecode;
  }

};


export default cipher;
