import React from 'react'
import './LoadingScreen.css'

export const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <h2 className="loading-title">Laddar enkät...</h2>
        <p className="loading-message">Ett ögonblick medan vi förbereder allt</p>
      </div>
    </div>
  )
} 