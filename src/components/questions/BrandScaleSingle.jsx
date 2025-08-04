import React from 'react'

export const BrandScaleSingle = ({ label, description, brands, scale, name, value, onChange }) => {
  return (
    <div className="question-group">
      <h3 className="question-label">{label}</h3>
      {description && <p className="question-description">{description}</p>}
      <p>BrandScaleSingle component - TODO: Implement full functionality</p>
    </div>
  )
} 