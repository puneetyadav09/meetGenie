import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * @typedef {Object} UserProfile
 * @property {string} id
 * @property {string|null} first_name
 * @property {string|null} last_name
 * @property {string|null} company
 * @property {string|null} job_title
 * @property {string|null} team_size
 * @property {string|null} avatar_url
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @typedef {Object} Meeting
 * @property {string} id
 * @property {string} user_id
 * @property {string} title
 * @property {string} description
 * @property {'scheduled' | 'in_progress' | 'completed' | 'cancelled'} status
 * @property {string|null} start_time
 * @property {string|null} end_time
 * @property {number} duration_minutes
 * @property {number} participant_count
 * @property {string|null} meeting_url
 * @property {string|null} recording_url
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ActionItem
 * @property {string} id
 * @property {string} meeting_id
 * @property {string} title
 * @property {string} description
 * @property {string|null} assignee
 * @property {string|null} assignee_email
 * @property {string|null} due_date
 * @property {'low' | 'medium' | 'high' | 'urgent'} priority
 * @property {'pending' | 'in_progress' | 'completed' | 'cancelled'} status
 * @property {string|null} completed_at
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @typedef {Object} Subscription
 * @property {string} id
 * @property {string} user_id
 * @property {'starter' | 'professional' | 'enterprise'} plan_type
 * @property {'active' | 'cancelled' | 'past_due' | 'trialing' | 'incomplete'} status
 * @property {string} current_period_start
 * @property {string} current_period_end
 * @property {string|null} trial_end
 * @property {number} monthly_meeting_limit
 * @property {number} monthly_meetings_used
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @typedef {Object} UserAnalytics
 * @property {string} user_id
 * @property {number} total_meetings
 * @property {number} total_duration_minutes
 * @property {number} avg_meeting_duration
 * @property {number} productivity_score
 * @property {string|null} last_meeting_date
 */
