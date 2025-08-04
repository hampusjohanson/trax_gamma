import React from 'react'
import './SurveyNavigation.css'

export const SurveyNavigation = ({ 
  currentPage, 
  totalPages, 
  onNext, 
  onPrev, 
  onSubmit, 
  isLoading, 
  isQuestionAnswered,
  hasVisibleQuestions 
}) => {
  const isFirstPage = currentPage === 0
  const isLastPage = currentPage === totalPages - 1
  const canProceed = hasVisibleQuestions(currentPage)

  return (
    <div className="survey-navigation">
      <div className="navigation-container">
        <button
          type="button"
          className={`nav-button prev-button ${isFirstPage ? 'disabled' : ''}`}
          onClick={onPrev}
          disabled={isFirstPage}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6" />
          </svg>
          Föregående
        </button>

        <div className="navigation-info">
          <span className="page-indicator">
            {currentPage + 1} av {totalPages}
          </span>
        </div>

        {isLastPage ? (
          <button
            type="submit"
            className={`nav-button submit-button ${!canProceed ? 'disabled' : ''}`}
            onClick={onSubmit}
            disabled={!canProceed || isLoading}
          >
            {isLoading ? (
              <>
                <div className="loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                Skickar...
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6" />
                </svg>
                Skicka svar
              </>
            )}
          </button>
        ) : (
          <button
            type="button"
            className={`nav-button next-button ${!canProceed ? 'disabled' : ''}`}
            onClick={onNext}
            disabled={!canProceed}
          >
            Nästa
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
} 