import { createClient } from '@supabase/supabase-js'

export const createSupabaseClient = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials not found')
    return null
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

export const submitSurveyData = async (supabase, data) => {
  if (!supabase) {
    throw new Error('Supabase client not initialized')
  }

  try {
    const { data: result, error } = await supabase
      .from('survey_responses')
      .insert([data])
      .select()

    if (error) {
      throw error
    }

    return result
  } catch (error) {
    console.error('Failed to submit survey data:', error)
    throw error
  }
}

export const testSupabaseConnection = async (supabase) => {
  if (!supabase) {
    throw new Error('Supabase client not initialized')
  }

  try {
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
} 