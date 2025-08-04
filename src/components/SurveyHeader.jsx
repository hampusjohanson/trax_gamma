import React from 'react'
import './SurveyHeader.css'

export const SurveyHeader = ({ title, subtitle, category }) => {
  return (
    <header className="survey-header">
      <div className="header-content">
        {title && (
          <h1 className="header-title">
            {title}
          </h1>
        )}
        {subtitle && (
          <h2 className="header-subtitle">
            {subtitle}
          </h2>
        )}
        {category && (
          <div className="category-description">
            {category}
          </div>
        )}
      </div>
      <div className="header-decoration">
        <div className="decoration-line"></div>
        <div className="decoration-dot"></div>
        <div className="decoration-line"></div>
      </div>
    </header>
  )
} 