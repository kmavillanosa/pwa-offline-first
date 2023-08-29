var CryptoJS = require("crypto-js");

const SECRET = "1c4a1e46-0257-49b3-aeaa-6e1ecd4460eb";

export function enc(plainText) {
  var b64 = CryptoJS.AES.encrypt(plainText, SECRET).toString();
  var e64 = CryptoJS.enc.Base64.parse(b64);
  var eHex = e64.toString(CryptoJS.enc.Hex);
  return eHex;
}

export function dec(cipherText) {
  var reb64 = CryptoJS.enc.Hex.parse(cipherText);
  var bytes = reb64.toString(CryptoJS.enc.Base64);
  var decrypt = CryptoJS.AES.decrypt(bytes, SECRET);
  var plain = decrypt.toString(CryptoJS.enc.Utf8);
  return plain;
}
