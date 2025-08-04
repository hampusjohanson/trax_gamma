import React from 'react'
import './SurveyProgress.css'

export const SurveyProgress = ({ percentage, currentPage, totalPages }) => {
  return (
    <div className="survey-progress">
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="progress-info">
          <span className="progress-text">
            {currentPage + 1} av {totalPages}
          </span>
          <span className="progress-percentage">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  )
} 