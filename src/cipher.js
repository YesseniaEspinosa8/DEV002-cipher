const cipher = {
  encode: function (offset, string) {
    if (typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError();
    }
    let textEncode = "";
    for (let index = 0; index < string.length; index++) {
      let codeChar = string.charCodeAt(index);
      let charCipher;
      if (codeChar < -65 || codeChar > 90) {
        charCipher = String.fromChardCode(codeChar);
        textEncode += charCipher;

      } else {
        let codeCharEncode = (codeChar - 65 + offset) % 26 + 65;
        charCipher = String.fromCharCode(codeCharEncode);
        textEncode = textEncode + charCipher;
      }
    }
    return textEncode;
  },


  decode: function (offset, string) {
    if (typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError();
    }
    let textDecode = "";
    for (let index = 0; index < string.length; index++) {
      let codeChar = string.charCodeAt(index);
      let charCipher;
      if (codeChar < 65 || codeChar > 90) {
        charCipher = String.fromCharCode(codeChar);
        textDecode += charCipher;

      } else {
        let codeCharDecode = (codeChar - 90 - offset) % 26 + 90;
        charCipher = String.fromCharCode(codeCharDecode);
        textDecode = textDecode + charCipher;

      }
    }
    return textDecode;
  }

};


export default cipher;
