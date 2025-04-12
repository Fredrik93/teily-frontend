import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeilyList from './components/TeilyList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TeilyList />
  )
}

export default App
