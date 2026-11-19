import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container">
      <header className="header">
        <span className="logo" role="img" aria-label="React Logo">⚛️</span>
        <h1>Simple React App</h1>
        <p className="subtitle">A clean, lightweight React application built with Vite</p>
      </header>

      <section className="card">
        <h2>Interactive Counter</h2>
        <div className="counter-display">{count}</div>
        <div className="button-group">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setCount((prev) => prev - 1)}
          >
            - Decrement
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setCount((prev) => prev + 1)}
          >
            + Increment
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setCount(0)}
            disabled={count === 0}
          >
            Reset
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </footer>
    </main>
  )
}
