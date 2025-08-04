import React from 'react'
import './SuccessScreen.css'

export const SuccessScreen = ({ onReset }) => {
  return (
    <div className="success-screen">
      <div className="success-container">
        <div className="success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22,4 12,14.01 9,11.01" />
          </svg>
        </div>
        
        <h1 className="success-title">
          Tack för ditt svar!
        </h1>
        
        <p className="success-message">
          Din enkät har skickats in framgångsrikt.
        </p>
        
        <button 
          className="success-button"
          onClick={onReset}
        >
          Skicka ett till svar
        </button>
      </div>
    </div>
  )
} 