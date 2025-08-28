import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // 🔹 Al cargar, pedimos el valor inicial desde /api/init
  useEffect(() => {
    fetch('/api/init')
      .then(res => res.json())
      .then(data => {
        if (data.count !== undefined) setCount(data.count)
      })
      .catch(err => console.error('Error inicializando contador', err))
  }, [])

  // 🔹 Función para incrementar en el servidor
  const handleIncrement = async () => {
    try {
      const res = await fetch('/api/increment', { method: 'POST' })
      const data = await res.json()
      setCount(data.count)
      console.log("incremento hecho")// usamos el valor del servidor
    } catch (err) {
      console.error('Error incrementando en servidor', err)
    }
  }

  // 🔹 Función para decrementar en el servidor
  const handleDecrement = async () => {
    try {
      const res = await fetch('/api/decrement', { method: 'POST' })
      const data = await res.json()
      setCount(data.count)
    } catch (err) {
      console.error('Error decrementando en servidor', err)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>your count is: {count}</p>
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Decrementar</button>
      </div>
      <p className="read-the-docs">
        hello on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
