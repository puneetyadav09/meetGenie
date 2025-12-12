import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import { useAuth } from '../contexts/AuthContext'

export const useMeetings = () => {
  const { user } = useAuth()
  const [meetings, setMeetings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (user) {
      fetchMeetings()
    }
  }, [user])

  const fetchMeetings = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('meetings')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setMeetings(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const createMeeting = async (meetingData) => {
    try {
      const { data, error } = await supabase
        .from('meetings')
        .insert([{ ...meetingData, user_id: user?.id }])
        .select()
        .single()

      if (error) throw error
      setMeetings(prev => [data, ...prev])
      return data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create meeting')
      throw err
    }
  }

  const updateMeeting = async (id, updates) => {
    try {
      const { data, error } = await supabase
        .from('meetings')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      setMeetings(prev => prev.map(m => m.id === id ? data : m))
      return data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update meeting')
      throw err
    }
  }

  return {
    meetings,
    loading,
    error,
    fetchMeetings,
    createMeeting,
    updateMeeting
  }
}

export const useActionItems = (meetingId) => {
  const { user } = useAuth()
  const [actionItems, setActionItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchActionItems()
    }
  }, [user, meetingId])

  const fetchActionItems = async () => {
    try {
      setLoading(true)
      let query = supabase
        .from('action_items')
        .select(`
          *,
          meetings!inner(user_id)
        `)
        .eq('meetings.user_id', user?.id)

      if (meetingId) {
        query = query.eq('meeting_id', meetingId)
      }

      const { data, error } = await query.order('created_at', { ascending: false })

      if (error) throw error
      setActionItems(data || [])
    } catch (err) {
      console.error('Error fetching action items:', err)
    } finally {
      setLoading(false)
    }
  }

  const updateActionItem = async (id, updates) => {
    try {
      const { data, error } = await supabase
        .from('action_items')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      setActionItems(prev => prev.map(item => item.id === id ? data : item))
      return data
    } catch (err) {
      console.error('Error updating action item:', err)
      throw err
    }
  }

  return {
    actionItems,
    loading,
    fetchActionItems,
    updateActionItem
  }
}
