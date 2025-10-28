import { Fragment, useEffect, useState } from "react";
import {auth} from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { pingServer } from "../services/TeilyService";

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
       {serverStatus && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: '6px 8px',
                    textAlign: 'center',
                    zIndex: 9999,
                    background: serverStatus === 'connected' ? '#c8e6c9' /* green */ : '#ffb6c1' /* pink */,
                    color: '#000'
                }}>
                    {serverStatus === 'connected' ? 'Connected' : 'Connecting to server'}
                </div>
            )}
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

