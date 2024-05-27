// pages/debugDecrypt.js
import React, { useEffect } from 'react';
import CryptoJS from 'crypto-js';

const secretKey = 'm/5LGIaj0bYjxS4QvQxO/xTPVfoG7GO3UVvz5cO8nnNSlmz925YkGbkyuqYMsxUt';

const decryptMessage = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

const DebugDecrypt = () => {
  useEffect(() => {
    const encryptedMessage = "U2FsdGVkX19bEgW6T1gtt6TZjCNWkhqxCMzp8DKN4mg="; // Reemplaza esto con tu mensaje cifrado
    const decryptedMessage = decryptMessage(encryptedMessage);
    console.log('Decrypted Message:', decryptedMessage);
  }, []);

  return <div>Check the console for the decrypted message.</div>;
};

export default DebugDecrypt;