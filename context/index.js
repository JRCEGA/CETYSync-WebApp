// context.js
import React, { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const router = useRouter();

  // Recuperar datos del localStorage cuando la aplicación se cargue
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedSecret = localStorage.getItem("secret");
    if (storedUsername && storedSecret) {
      setUsername(storedUsername);
      setSecret(storedSecret);
    }
  }, []);

  // Almacenar datos en localStorage cuando cambien
  useEffect(() => {
    if (username && secret) {
      localStorage.setItem("username", username);
      localStorage.setItem("secret", secret);
    }
  }, [username, secret]);

  const logout = () => {
    setUsername("");
    setSecret("");
    localStorage.removeItem("username");
    localStorage.removeItem("secret");
    router.push("/");
  };

  const value = {
    username,
    setUsername,
    secret,
    setSecret,
    logout,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
