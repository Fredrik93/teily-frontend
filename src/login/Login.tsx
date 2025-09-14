import { useState } from "react";
import {auth} from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("User registered!");
  };

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged in!");
  };

  return (
    <div>
      <h2>Login / Register</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
    </div>
  );
}

async function callBackend() {
  const user = auth.currentUser;
  if (!user) return;

  const token = await user.getIdToken();

  const res = await fetch("http://localhost:8080/todos", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const data = await res.json();
  console.log(data);
}
