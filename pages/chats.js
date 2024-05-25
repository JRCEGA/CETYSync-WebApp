import React, { useState, useEffect, useContext } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Context } from "../context";
import { encryptMessage, decryptMessage } from "../context/crypto";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Home() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/");
    }
  }, [username, secret]);

  if (!showChat) return <div />;

  const handleNewMessage = (chatId, message) => {
    const encryptedMessage = encryptMessage(message.text);
    console.log('Encrypted Message:', encryptedMessage); // Imprime el mensaje cifrado
    return {
      ...message,
      text: encryptedMessage,
    };
  };

  const handleReceiveMessage = (message) => {
    const decryptedMessage = decryptMessage(message.text);
    console.log('Decrypted Message:', decryptedMessage); // Imprime el mensaje descifrado
    return {
      ...message,
      text: decryptedMessage,
    };
  };

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 212px)"
          projectID="0a02e733-4f9c-41fc-9d10-a51b816402f3"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
          onNewMessage={(chatId, message) => handleNewMessage(chatId, message)}
          onMessage={(chatId, message) => handleReceiveMessage(message)}
          offset={-7}
        />
      </div>
    </div>
  );
}