import { Fragment } from 'react/jsx-runtime'
import './App.css'
import Teilys from './components/Teilys'
import { useAuthState } from './login/AuthProvider'
import Login from './login/Login'
import { signOut } from 'firebase/auth'
import { auth } from './login/firebase'
import ConnectionToBackend from './components/ConnectionToBackend'

function App() {
  const { user, loading } = useAuthState();
  if (loading) { return <p> loading ... </p> }
  // user nog logged in, show login page, else show teilys 
  if (!user) { return <Login /> } else {
    return (
      <Fragment>
        <ConnectionToBackend />
        <Teilys />
        <button onClick={() => signOut(auth)}>Logout</button>

      </Fragment>
    )
  }
}

export default App
