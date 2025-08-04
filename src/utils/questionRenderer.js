import React from 'react'

// Question type components
import { SecurityQuestion } from '../components/questions/SecurityQuestion'
import { RadioQuestion } from '../components/questions/RadioQuestion'
import { BrandMatrixV2 } from '../components/questions/BrandMatrixV2'
import { ImageStatements } from '../components/questions/ImageStatements'
import { ShareOfMarket } from '../components/questions/ShareOfMarket'
import { ImportanceScale } from '../components/questions/ImportanceScale'
import { BrandScaleSingle } from '../components/questions/BrandScaleSingle'
import { OpenTextQuestion } from '../components/questions/OpenTextQuestion'

export const renderQuestion = (questionKey, question, formData, setFormData, randomizedData) => {
  const commonProps = {
    key: questionKey,
    name: questionKey,
    value: formData[questionKey] || '',
    onChange: (e) => {
      const { name, value, type, checked } = e.target
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
    }
  }

  switch (question.type) {
    case 'security':
      return (
        <SecurityQuestion
          {...commonProps}
          question={question}
          currentQuestionIndex={randomizedData?.currentSecurityQuestion || 0}
        />
      )

    case 'radio':
      return (
        <RadioQuestion
          {...commonProps}
          label={question.label}
          options={question.options}
        />
      )

    case 'brand_matrix_v2':
      return (
        <BrandMatrixV2
          {...commonProps}
          label={question.label}
          description={question.description}
          brands={randomizedData?.randomizedBrands || []}
        />
      )

    case 'image_statements':
      return (
        <ImageStatements
          {...commonProps}
          label={question.label}
          description={question.description}
          statements={randomizedData?.randomizedStatements || []}
          brands={randomizedData?.randomizedImageBrands || []}
        />
      )

    case 'share_of_market':
      return (
        <ShareOfMarket
          {...commonProps}
          label={question.label}
          description={question.description}
          brands={randomizedData?.randomizedBrands || []}
        />
      )

    case 'importance_scale':
      return (
        <ImportanceScale
          {...commonProps}
          label={question.label}
          description={question.description}
          options={randomizedData?.randomizedImportanceOptions || []}
        />
      )

    case 'brand_scale_single':
      return (
        <BrandScaleSingle
          {...commonProps}
          label={question.label}
          description={question.description}
          brands={randomizedData?.randomizedBrands || []}
          scale={question.scale}
        />
      )

    case 'open_text':
      return (
        <OpenTextQuestion
          {...commonProps}
          label={question.label}
          placeholder={question.placeholder}
        />
      )

    default:
      console.warn(`Unknown question type: ${question.type}`)
      return null
  }
}

export const shouldShowQuestion = (questionKey, questionIndex, formData) => {
  // Add logic for conditional questions here
  return true
}

export const generateDynamicOpenQuestions = (formData, randomizedBrands) => {
  const questions = []
  
  // Generate questions based on user responses
  if (formData.behavior_frequency && formData.behavior_frequency !== 'Aldrig') {
    questions.push({
      key: 'open_favorite',
      label: 'Vilken är din favorit hamburgerkedja och varför?',
      type: 'open_text'
    })
  }
  
  if (formData.awareness_v2_brands) {
    const knownBrands = Object.keys(formData.awareness_v2_brands).filter(
      key => formData.awareness_v2_brands[key]
    )
    
    if (knownBrands.length > 0) {
      questions.push({
        key: 'open_experience',
        label: 'Berätta om din senaste upplevelse på en hamburgerkedja',
        type: 'open_text'
      })
    }
  }
  
  return questions
} 