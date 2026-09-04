import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

const API_BASE = 'http://localhost:5000/api/auth'

const safeParseJSON = async (res) => {
  const text = await res.text()
  if (!text) return {}
  try {
    return JSON.parse(text)
  } catch {
    return { message: text.slice(0, 200) }
  }
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })
  const [error, setError] = useState(null)

  const login = async ({ email, password }) => {
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await safeParseJSON(res)
      console.log(data)

      if (!res.ok) {
        const message = data.message || `Login failed (${res.status})`
        setError(message)
        throw new Error(message)
      }

      localStorage.setItem('user', JSON.stringify(data))
      setUser(data)
      return data
    } catch (err) {
      if (!error) {
        const message = err.message === 'Failed to fetch'
          ? 'Could not reach the server. Is the backend running on port 5000?'
          : err.message
        setError(message)
      }
      throw err
    }
  }

  const register = async ({ name, email, password }) => {
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      })
      const data = await safeParseJSON(res)

      if (!res.ok) {
        const message = data.message || `Registration failed (${res.status})`
        setError(message)
        throw new Error(message)
      }

      localStorage.setItem('user', JSON.stringify(data))
      setUser(data)
      return data
    } catch (err) {
      if (!error) {
        const message = err.message === 'Failed to fetch'
          ? 'Could not reach the server. Is the backend running on port 5000?'
          : err.message
        setError(message)
      }
      throw err
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  const value = {
    user,
    isAuthenticated: !!user,
    error,
    setError,
    login,
    register,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)

  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return ctx
}

export default AuthContext