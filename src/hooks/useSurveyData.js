import { useState, useEffect, useCallback } from 'react'
import { SURVEY_CONFIG } from '../config/surveyConfig'

export const useSurveyData = () => {
  const [formData, setFormData] = useState({})
  const [randomizedBrands, setRandomizedBrands] = useState([])
  const [randomizedImageBrands, setRandomizedImageBrands] = useState([])
  const [randomizedStatements, setRandomizedStatements] = useState([])
  const [randomizedImportanceOptions, setRandomizedImportanceOptions] = useState([])
  const [randomizedSecurityQuestions, setRandomizedSecurityQuestions] = useState([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize all data once
  useEffect(() => {
    if (!isInitialized) {
      initializeData()
    }
  }, [isInitialized])

  const initializeData = useCallback(() => {
    // Initialize form data
    const initialData = {}
    Object.values(SURVEY_CONFIG.sections).forEach(section => {
      Object.keys(section.questions).forEach(key => {
        initialData[key] = ''
      })
    })
    setFormData(initialData)

    // Randomize brands (all 10 brands)
    const shuffledBrands = [...SURVEY_CONFIG.brands].sort(() => Math.random() - 0.5)
    setRandomizedBrands(shuffledBrands)

    // Create separate list for image statements (only 6 original brands)
    const imageBrands = shuffledBrands.slice(0, 6)
    setRandomizedImageBrands(imageBrands)

    // Randomize statements
    const statements = SURVEY_CONFIG.sections.image.questions.image_statements.statements
    const shuffledStatements = [...statements].sort(() => Math.random() - 0.5)
    setRandomizedStatements(shuffledStatements)

    // Randomize importance options
    const importanceOptions = SURVEY_CONFIG.sections.importance.questions.importance_attributes.options
    const shuffledImportanceOptions = [...importanceOptions].sort(() => Math.random() - 0.5)
    setRandomizedImportanceOptions(shuffledImportanceOptions)

    // Randomize security questions
    const securityQuestions = SURVEY_CONFIG.sections.security.questions.security_questions.questions
    const shuffledSecurityQuestions = [...securityQuestions].sort(() => Math.random() - 0.5)
    setRandomizedSecurityQuestions(shuffledSecurityQuestions)

    setIsInitialized(true)
  }, [])

  const resetData = useCallback(() => {
    setIsInitialized(false)
    setFormData({})
  }, [])

  return {
    formData,
    setFormData,
    randomizedBrands,
    randomizedImageBrands,
    randomizedStatements,
    randomizedImportanceOptions,
    randomizedSecurityQuestions,
    isInitialized,
    setIsInitialized,
    resetData
  }
} 