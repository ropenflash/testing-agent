import { useState } from 'react'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  const features = [
    {
      icon: '⚡',
      title: 'Ultra Fast',
      description: 'Powered by Vite and modern React tooling for instantaneous loading and silky-smooth rendering.'
    },
    {
      icon: '🎨',
      title: 'Modern Design',
      description: 'Clean typography, responsive glassmorphism aesthetic, and polished UI components.'
    },
    {
      icon: '🚀',
      title: 'Deploy Ready',
      description: 'Pre-configured and optimized for instant production deployment straight to Vercel.'
    }
  ]

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="navbar">
        <div className="brand">
          <span className="logo-icon">✨</span>
          <span className="brand-name">ModernApp</span>
        </div>
        <div className="nav-links">
          <button
            className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button
            className={`nav-btn ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button
            className={`nav-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
        </div>
        <div className="nav-actions">
          <a href="#features" className="btn btn-outline">Explore</a>
          <a href="#get-started" className="btn btn-primary">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="badge">🚀 Built with React & Vite</div>
        <h1 className="hero-title">
          Build and deploy your ideas <span className="gradient-text">faster than ever</span>
        </h1>
        <p className="hero-subtitle">
          A high-performance modern web application platform designed to kickstart your next project with clean components, elegant design, and seamless deployment.
        </p>
        <div className="hero-cta">
          <a href="#features" className="btn btn-primary btn-large">Get Started Now</a>
          <a href="https://github.com/ropenflash/testing-agent" target="_blank" rel="noreferrer" className="btn btn-secondary btn-large">
            View on GitHub →
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <h2>Why Choose This Platform?</h2>
          <p>Everything you need to ship world-class user experiences on the web.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Callout / CTA */}
      <section id="get-started" className="cta-section">
        <div className="cta-box">
          <h2>Ready to get started?</h2>
          <p>Launch your next full-featured web experience in minutes.</p>
          <a href="https://vercel.com" target="_blank" rel="noreferrer" className="btn btn-primary btn-large">
            Deploy to Vercel
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} ModernApp. Crafted with precision & React.</p>
      </footer>
    </div>
  )
}
import { useState } from 'react'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  const features = [
    {
      icon: '⚡',
      title: 'Ultra Fast',
      description: 'Powered by Vite and modern React tooling for instantaneous loading and silky-smooth rendering.'
    },
    {
      icon: '🎨',
      title: 'Modern Design',
      description: 'Clean typography, responsive glassmorphism aesthetic, and polished UI components.'
    },
    {
      icon: '🚀',
      title: 'Deploy Ready',
      description: 'Pre-configured and optimized for instant production deployment straight to Vercel.'
    }
  ]

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="navbar">
        <div className="brand">
          <span className="logo-icon">✨</span>
          <span className="brand-name">ModernApp</span>
        </div>
        <div className="nav-links">
          <button
            className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button
            className={`nav-btn ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button
            className={`nav-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
        </div>
        <div className="nav-actions">
          <a href="#features" className="btn btn-outline">Explore</a>
          <a href="#get-started" className="btn btn-primary">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="badge">🚀 Built with React & Vite</div>
        <h1 className="hero-title">
          Build and deploy your ideas <span className="gradient-text">faster than ever</span>
        </h1>
        <p className="hero-subtitle">
          A high-performance modern web application platform designed to kickstart your next project with clean components, elegant design, and seamless deployment.
        </p>
        <div className="hero-cta">
          <a href="#features" className="btn btn-primary btn-large">Get Started Now</a>
          <a href="https://github.com/ropenflash/testing-agent" target="_blank" rel="noreferrer" className="btn btn-secondary btn-large">
            View on GitHub →
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <h2>Why Choose This Platform?</h2>
          <p>Everything you need to ship world-class user experiences on the web.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Callout / CTA */}
      <section id="get-started" className="cta-section">
        <div className="cta-box">
          <h2>Ready to get started?</h2>
          <p>Launch your next full-featured web experience in minutes.</p>
          <a href="https://vercel.com" target="_blank" rel="noreferrer" className="btn btn-primary btn-large">
            Deploy to Vercel
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} ModernApp. Crafted with precision & React.</p>
      </footer>
    </div>
  )
}
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
