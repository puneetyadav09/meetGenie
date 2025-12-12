import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import { useAuth } from '../contexts/AuthContext'

export const useAnalytics = () => {
  const { user } = useAuth()
  const [analytics, setAnalytics] = useState(null)
  const [dashboardStats, setDashboardStats] = useState(null)
  const [actionItemsSummary, setActionItemsSummary] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchAnalytics()
    }
  }, [user])

  const fetchAnalytics = async () => {
    if (!user) return

    try {
      setLoading(true)

      // Fetch user analytics
      const { data: analyticsData } = await supabase
        .from('user_analytics')
        .select('*')
        .eq('user_id', user.id)
        .single()

      setAnalytics(analyticsData)

      // Fetch dashboard stats using the database function
      const { data: statsData } = await supabase
        .rpc('get_user_meeting_stats', { user_uuid: user.id })

      if (statsData && statsData.length > 0) {
        setDashboardStats(statsData[0])
      }

      // Fetch action items summary
      const { data: actionItemsData } = await supabase
        .rpc('get_action_items_summary', { user_uuid: user.id })

      if (actionItemsData && actionItemsData.length > 0) {
        setActionItemsSummary(actionItemsData[0])
      }

    } catch (error) {
      console.error('Error fetching analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  return {
    analytics,
    dashboardStats,
    actionItemsSummary,
    loading,
    refetch: fetchAnalytics
  }
}
