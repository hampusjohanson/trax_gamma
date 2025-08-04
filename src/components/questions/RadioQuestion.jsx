import React from 'react'
import './RadioQuestion.css'

export const RadioQuestion = ({ label, options, name, value, onChange }) => {
  return (
    <div className="question-group">
      <h3 className="question-label">{label}</h3>
      <div className="options-container">
        {options.map((option, index) => (
          <label key={index} className="option-label">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={onChange}
            />
            <span className="option-text">{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
} 