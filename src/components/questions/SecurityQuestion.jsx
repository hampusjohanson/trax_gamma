import React from 'react'
import './SecurityQuestion.css'

export const SecurityQuestion = ({ question, currentQuestionIndex, name, value, onChange }) => {
  const currentQuestion = question.questions[currentQuestionIndex]
  
  return (
    <div className="question-group">
      <h3 className="question-label">{currentQuestion}</h3>
      <div className="options-container">
        <label className="option-label">
          <input
            type="radio"
            name={name}
            value="true"
            checked={value === "true"}
            onChange={onChange}
          />
          <span className="option-text">Ja</span>
        </label>
        <label className="option-label">
          <input
            type="radio"
            name={name}
            value="false"
            checked={value === "false"}
            onChange={onChange}
          />
          <span className="option-text">Nej</span>
        </label>
      </div>
    </div>
  )
} 