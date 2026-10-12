
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

const API_BASE = window.location.hostname == "localhost"?'http://localhost:5000/api/auth': 'https://anterrastriya-kisian-union-8cdn.onrender.com/api/auth'

const safeParseJSON = async (res) => {
  const text = await res.text()
  if (!text) return {}
  try {
    return JSON.parse(text)
  } catch {
    return { message: text.slice(0, 200) }
  }
}

const readStored = () => {
  try {
    const stored = localStorage.getItem('auth') || sessionStorage.getItem('auth')
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(readStored)
  const [error, setError] = useState(null)

  const login = async ({ email, password, rememberMe = false }) => {
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await safeParseJSON(res)

      if (!res.ok) {
        throw new Error(data.message || `Login failed (${res.status})`)
      }

      // "Remember me" keeps login after the browser closes
      localStorage.removeItem('auth')
      sessionStorage.removeItem('auth')
      const storage = rememberMe ? localStorage : sessionStorage
      storage.setItem('auth', JSON.stringify(data))

      setAuth(data)
      return data
    } catch (err) {
      setError(
        err.message === 'Failed to fetch'
          ? 'Could not reach the server. Please try again.'
          : err.message
      )
      throw err
    }
  }

  const logout = () => {
    localStorage.removeItem('auth')
    sessionStorage.removeItem('auth')
    setAuth(null)
  }

  const value = {
    admin: auth?.admin || null,
    token: auth?.token || null,
    isAuthenticated: !!auth?.token,
    error,
    setError,
    login,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}

export default AuthContext