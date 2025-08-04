import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import './App.css'

// Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

function App() {
  const [zodiac, setZodiac] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [totalResponses, setTotalResponses] = useState(0)

  // Hämta totalt antal svar när komponenten laddas
  useEffect(() => {
    fetchTotalResponses()
  }, [])

  const fetchTotalResponses = async () => {
    try {
      const { count, error } = await supabase
        .from('survey_responses_flexible')
        .select('*', { count: 'exact', head: true })
      
      if (error) throw error
      setTotalResponses(count || 0)
    } catch (error) {
      console.error('Error fetching total responses:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!zodiac) return

    setIsLoading(true)
    
    try {
      const { error } = await supabase
        .from('survey_responses_flexible')
        .insert([
          {
            version: 1,
            responses: { zodiac: zodiac }
          }
        ])

      if (error) throw error
      
      setIsSubmitted(true)
      fetchTotalResponses() // Uppdatera totalt antal
    } catch (error) {
      console.error('Error submitting response:', error)
      alert('Ett fel uppstod. Försök igen.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="app">
        <div style={{
          padding: '50px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #88FFC2 0%, #66D4A3 100%)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '3em',
            color: '#1a1a1a',
            marginBottom: '20px'
          }}>
            ✨ Tack för ditt svar!
          </h1>
          
          <p style={{
            fontSize: '1.2em',
            color: '#2d3748',
            marginBottom: '30px'
          }}>
            Ditt stjärntecken: <strong>{zodiac}</strong>
          </p>

          <p style={{
            fontSize: '1em',
            color: '#4a5568'
          }}>
            Totalt antal svar: <strong>{totalResponses}</strong>
          </p>

          <button
            onClick={() => {
              setIsSubmitted(false)
              setZodiac('')
            }}
            style={{
              marginTop: '20px',
              padding: '12px 24px',
              fontSize: '1em',
              background: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
            }}
          >
            Svara igen
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div style={{
        padding: '50px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #88FFC2 0%, #66D4A3 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontSize: '3em',
          color: '#1a1a1a',
          marginBottom: '20px'
        }}>
          ⭐ Stjärntecken Enkät
        </h1>

        <p style={{
          fontSize: '1.2em',
          color: '#2d3748',
          marginBottom: '30px'
        }}>
          Vad är ditt stjärntecken?
        </p>

        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
          <select
            value={zodiac}
            onChange={(e) => setZodiac(e.target.value)}
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '1.1em',
              border: '2px solid #e2e8f0',
              borderRadius: '12px',
              background: 'white',
              marginBottom: '20px'
            }}
            required
          >
            <option value="">Välj ditt stjärntecken...</option>
            <option value="Väduren">♈ Väduren</option>
            <option value="Oxen">♉ Oxen</option>
            <option value="Tvillingarna">♊ Tvillingarna</option>
            <option value="Kräftan">♋ Kräftan</option>
            <option value="Lejonet">♌ Lejonet</option>
            <option value="Jungfrun">♍ Jungfrun</option>
            <option value="Vågen">♎ Vågen</option>
            <option value="Skorpionen">♏ Skorpionen</option>
            <option value="Skytten">♐ Skytten</option>
            <option value="Stenbocken">♑ Stenbocken</option>
            <option value="Vattumannen">♒ Vattumannen</option>
            <option value="Fiskarna">♓ Fiskarna</option>
          </select>

          <button
            type="submit"
            disabled={isLoading || !zodiac}
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '1.1em',
              background: zodiac ? '#4299e1' : '#cbd5e0',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: zodiac ? 'pointer' : 'not-allowed',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
          >
            {isLoading ? 'Skickar...' : 'Skicka svar'}
          </button>
        </form>

        <p style={{
          marginTop: '30px',
          fontSize: '1em',
          color: '#4a5568'
        }}>
          Totalt antal svar: <strong>{totalResponses}</strong>
        </p>
      </div>
    </div>
  )
}

export default App
