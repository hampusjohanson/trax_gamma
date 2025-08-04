import React from 'react'
import './BrandMatrixV2.css'

export const BrandMatrixV2 = ({ label, description, brands, name, value, onChange }) => {
  return (
    <div className="question-group">
      <h3 className="question-label">{label}</h3>
      {description && <p className="question-description">{description}</p>}
      <div className="brand-matrix">
        {brands.map((brand, index) => (
          <div key={index} className="brand-option">
            <img src={brand.image} alt={brand.name} className="brand-logo" />
            <span className="brand-name">{brand.name}</span>
            <input
              type="checkbox"
              name={`${name}_${brand.name}`}
              checked={value?.[`${name}_${brand.name}`] || false}
              onChange={onChange}
            />
          </div>
        ))}
      </div>
    </div>
  )
} 