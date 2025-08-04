import React from 'react'

export const ImageStatements = ({ label, description, statements, brands, name, value, onChange }) => {
  return (
    <div className="question-group">
      <h3 className="question-label">{label}</h3>
      {description && <p className="question-description">{description}</p>}
      <p>ImageStatements component - TODO: Implement full functionality</p>
    </div>
  )
} 