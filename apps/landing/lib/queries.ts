/**
 * Centralized query keys and configuration for TanStack Query
 */

// Query Keys
export const QUERY_KEYS = {
  admin: {
    users: ["admin", "users"] as const,
  },
} as const;

// Stale Times (in milliseconds)
export const STALE_TIMES = {
  admin: {
    users: 1000 * 60 * 5, // 5 minutes
  },
} as const;

// Default Query Options
export const DEFAULT_QUERY_OPTIONS = {
  admin: {
    users: {
      staleTime: STALE_TIMES.admin.users,
    },
  },
} as const;
