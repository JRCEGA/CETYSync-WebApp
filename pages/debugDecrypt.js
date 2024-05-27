import CryptoJS from 'crypto-js';

const secretKey = 'm/5LGIaj0bYjxS4QvQxO/xTPVfoG7GO3UVvz5cO8nnNSlmz925YkGbkyuqYMsxUt';

const decryptMessage = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

const encryptedMessage = "U2FsdGVkX18DuCPBAG0a6DqXU9lOxXppjhm3b8xRabN89B9XSZsMiYWzphImUmAu"; // Reemplaza esto con tu mensaje cifrado
const decryptedMessage = decryptMessage(encryptedMessage);

console.log('Decrypted Message:', decryptedMessage);