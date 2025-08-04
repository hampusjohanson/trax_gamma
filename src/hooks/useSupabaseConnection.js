import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@supabase/supabase-js'

export const useSupabaseConnection = () => {
  const [supabase, setSupabase] = useState(null)
  const [connectionStatus, setConnectionStatus] = useState('connecting')

  // Initialize Supabase client
  useEffect(() => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

    if (supabaseUrl && supabaseAnonKey) {
      const client = createClient(supabaseUrl, supabaseAnonKey)
      setSupabase(client)
      setConnectionStatus('connected')
    } else {
      console.warn('Supabase credentials not found, running in demo mode')
      setConnectionStatus('demo')
    }
  }, [])

  // Test connection
  const testConnection = useCallback(async () => {
    if (!supabase) {
      throw new Error('Supabase client not initialized')
    }

    try {
      // Simple test query
      const { data, error } = await supabase
        .from('survey_responses')
        .select('count')
        .limit(1)

      if (error) {
        throw error
      }

      return { success: true, data }
    } catch (error) {
      console.error('Supabase connection test failed:', error)
      throw error
    }
  }, [supabase])

  // Submit survey data
  const submitSurvey = useCallback(async (surveyData) => {
    if (!supabase) {
      throw new Error('Supabase client not initialized')
    }

    try {
      const { data, error } = await supabase
        .from('survey_responses')
        .insert([surveyData])
        .select()

      if (error) {
        throw error
      }

      return { success: true, data }
    } catch (error) {
      console.error('Survey submission failed:', error)
      throw error
    }
  }, [supabase])

  return {
    supabase,
    connectionStatus,
    testConnection,
    submitSurvey
  }
} 