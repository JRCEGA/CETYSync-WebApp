// utils/crypto.js
import CryptoJS from 'crypto-js';

const secretKey = 'm/5LGIaj0bYjxS4QvQxO/xTPVfoG7GO3UVvz5cO8nnNSlmz925YkGbkyuqYMsxUt'; // Usa una clave secreta segura

export const encryptMessage = (message) => {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
};

export const decryptMessage = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
