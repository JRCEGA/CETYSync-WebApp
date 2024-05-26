// index.js
import React, { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";

const Auth = () => {
  const { username, setUsername, secret, setSecret } = useContext(Context);
  const router = useRouter();

  const validateEmail = (email) => {
    const domain = email.split('@')[1];
    return domain === 'cetys.edu.mx';
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (username.length === 1 || secret.length === 1) return;

    if (!validateEmail(username)) {
      alert("Please use a valid CETYS email address.");
      return;
    }

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "f962106b-aabb-45ff-bc56-5baf9eb4cd8e" } }
      )
      .then((r) => {
        // Almacenar datos en localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("secret", secret);
        router.push("/chats");
      });
  };

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">CETYSync</div>

          <div className="input-container">
            <input
              placeholder="CETYS Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
