
import { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

const API_BASE = window.location.hostname == "localhost"?'http://localhost:5000/api/auth': 'https://anterrastriya-kisian-union-8cdn.onrender.com/api/auth'



export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null)
  const [error, setError] = useState(null)

  console.log('context auth',auth)

   useEffect(() => {


  const authData = localStorage.getItem('auth')

  if (authData) {
    setAuth(JSON.parse(authData))
  }
}, [])

  const login = async ({ email, password}) => {
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || `Login failed (${res.status})`)
      }

      localStorage.removeItem('auth')
      
      localStorage.setItem('auth', JSON.stringify(data))

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
    setAuth(null)
  }


    const value = {
    admin: auth?.admin || null,
    token: auth?.token || null,
    isAuthenticated: !!auth?.token,
    error,
    setError,
    login,
    logout,
    auth
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}

export default AuthContext