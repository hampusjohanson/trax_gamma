import { useState, useCallback, useMemo } from 'react'
import { SURVEY_CONFIG } from '../config/surveyConfig'

export const useSurveyNavigation = (formData, randomizedBrands, randomizedStatements) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [currentSecurityQuestion, setCurrentSecurityQuestion] = useState(0)
  const [currentOpenQuestionIndex, setCurrentOpenQuestionIndex] = useState(0)

  // Define pages in order
  const pages = useMemo(() => [
    { key: 'security', title: '' },
    { key: 'screening', title: '' },
    { key: 'awareness_v2', title: '' },
    { key: 'image', title: '' },
    { key: 'behavior', title: '' },
    { key: 'share_of_market', title: '' },
    { key: 'importance', title: '' },
    { key: 'consideration', title: '' },
    { key: 'open_questions', title: '' },
    { key: 'background', title: '' }
  ], [])

  const currentPageData = useMemo(() => pages[currentPage], [pages, currentPage])

  // Navigation functions
  const nextPage = useCallback(() => {
    // Special handling for open_questions page
    if (currentPageData.key === 'open_questions') {
      const openQuestions = generateDynamicOpenQuestions()
      if (currentOpenQuestionIndex < openQuestions.length - 1) {
        setCurrentOpenQuestionIndex(prev => prev + 1)
        return
      } else {
        setCurrentOpenQuestionIndex(0)
      }
    }

    // Special handling for security page
    if (currentPageData.key === 'security') {
      if (currentSecurityQuestion < 17) {
        setCurrentSecurityQuestion(prev => prev + 1)
        return
      } else {
        setCurrentSecurityQuestion(0)
      }
    }

    // Go to next page
    if (currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1)
      
      // Scroll to top when page changes
      setTimeout(() => {
        const container = document.querySelector('.survey-container')
        if (container) {
          container.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 100)
    }
  }, [currentPage, currentPageData, currentOpenQuestionIndex, currentSecurityQuestion, pages.length])

  const prevPage = useCallback(() => {
    // Special handling for open_questions page
    if (currentPageData.key === 'open_questions') {
      if (currentOpenQuestionIndex > 0) {
        setCurrentOpenQuestionIndex(prev => prev - 1)
        return
      }
    }

    // Special handling for security page
    if (currentPageData.key === 'security') {
      if (currentSecurityQuestion > 0) {
        setCurrentSecurityQuestion(prev => prev - 1)
        return
      }
    }

    // Go to previous page
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1)
      
      // Scroll to top when page changes
      setTimeout(() => {
        const container = document.querySelector('.survey-container')
        if (container) {
          container.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 100)
    }
  }, [currentPage, currentPageData, currentOpenQuestionIndex, currentSecurityQuestion])

  // Check if current page has visible questions
  const hasVisibleQuestions = useCallback((pageIndex) => {
    const pageData = pages[pageIndex]
    const section = SURVEY_CONFIG.sections[pageData.key]
    if (!section) return false
    
    // Special handling for image page (statements)
    if (pageData.key === 'image') {
      return randomizedStatements && randomizedStatements.length > 0
    }
    
    // Special handling for open_questions page
    if (pageData.key === 'open_questions') {
      const openQuestions = generateDynamicOpenQuestions()
      return openQuestions.length > 0
    }
    
    // Check if any question on the page is visible
    return Object.entries(section.questions).some(([key, question], index) => {
      if (!shouldShowQuestion(key, index)) {
        return false
      }
      
      const renderedQuestion = renderQuestion(key, question)
      return renderedQuestion !== null
    })
  }, [pages, randomizedStatements])

  // Check if question is answered
  const isQuestionAnswered = useCallback((questionKey) => {
    const value = formData[questionKey]
    if (value === undefined || value === '') return false
    
    if (typeof value === 'boolean') return value
    if (typeof value === 'string') return value.trim() !== ''
    if (typeof value === 'number') return value > 0
    
    return true
  }, [formData])

  // Helper functions (these will be moved to utilities)
  const shouldShowQuestion = (questionKey, questionIndex) => {
    // Implementation will be moved to utilities
    return true
  }

  const renderQuestion = (key, question) => {
    // Implementation will be moved to utilities
    return true
  }

  const generateDynamicOpenQuestions = () => {
    // Implementation will be moved to utilities
    return []
  }

  return {
    currentPage,
    setCurrentPage,
    currentSecurityQuestion,
    setCurrentSecurityQuestion,
    currentOpenQuestionIndex,
    setCurrentOpenQuestionIndex,
    pages,
    currentPageData,
    nextPage,
    prevPage,
    hasVisibleQuestions,
    isQuestionAnswered
  }
} 