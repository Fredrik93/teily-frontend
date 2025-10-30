import { Fragment, useEffect, useState } from "react";
import {auth} from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { pingServer } from "../services/TeilyService";
import ServerStatusBanner from "../components/ServerStatusBanner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverStatus, setServerStatus] = useState<'connecting' | 'connected' | null>(null);

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("User registered!");
  };

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged in!");
  };

    useEffect(() => {
          let mounted = true;
  
          const check = async () => {
              if (!mounted) return;
              setServerStatus('connecting'); // show pink
              const ok = await pingServer();
              console.log("connecting ... ")
              if (!mounted) return;
  
              if (ok) {
                  setServerStatus('connected'); // show green
                  // disappear after short delay
                  console.log("connected to server!")
                  setTimeout(() => {
                      if (mounted) setServerStatus(null);
                  }, 1200);
              } else {
                  // keep showing "connecting" (pink) until next poll
                  setServerStatus('connecting');
              }
          };
  
          check();
          const interval = setInterval(check, 10000); // poll every 10s
  
          return () => {
              mounted = false;
              clearInterval(interval);
          };
      }, []);



  return (
    <Fragment>
       <ServerStatusBanner serverStatus={serverStatus} />
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
    </Fragment>
  );
}

