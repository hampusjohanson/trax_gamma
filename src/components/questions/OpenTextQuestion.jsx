import React from 'react'

export const OpenTextQuestion = ({ label, placeholder, name, value, onChange }) => {
  return (
    <div className="question-group">
      <h3 className="question-label">{label}</h3>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="open-text-input"
        rows={4}
      />
    </div>
  )
} 