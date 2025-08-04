import { useState } from 'react'
import './App.css'

function App() {
  console.log('🚀 App component rendering...')

  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div style={{
        padding: '50px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #88FFC2 0%, #66D4A3 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontSize: '3em',
          color: '#1a1a1a',
          marginBottom: '20px',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          🚀 Trax Mall Version 3
        </h1>

        <p style={{
          fontSize: '1.2em',
          color: '#2d3748',
          marginBottom: '30px'
        }}>
          Den nya, moderna versionen är live!
        </p>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '16px 32px',
            fontSize: '1.1em',
            background: 'white',
            border: 'none',
            borderRadius: '16px',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'
          }}
        >
          Klicka här! ({count})
        </button>

        <div style={{
          marginTop: '40px',
          padding: '20px',
          background: 'rgba(255,255,255,0.9)',
          borderRadius: '12px',
          maxWidth: '600px'
        }}>
          <h3>✨ Nya funktioner:</h3>
          <ul style={{ textAlign: 'left', lineHeight: '1.6' }}>
            <li>Modern komponentarkitektur</li>
            <li>Custom hooks för bättre kodorganisation</li>
            <li>Snygga animations och micro-interactions</li>
            <li>Responsive design för alla enheter</li>
            <li>Sticky navigation som alltid syns</li>
            <li>Progress bar med shimmer-effekt</li>
            <li>Loading states och error handling</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
