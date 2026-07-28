import { createContext, useContext, useEffect, useState } from 'react'
import { mockUsers } from '@/data/authUsers'

const AuthContext = createContext(null)
const STORAGE_KEY = 'ag_belleza_auth'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        setUser(JSON.parse(raw))
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
    setLoading(false)
  }, [])

  function login(email, password) {
    const found = mockUsers.find((u) => u.email === email && u.password === password)
    if (!found) {
      return { success: false, error: 'Correo o contraseña incorrectos.' }
    }
    const { password: _pw, ...safeUser } = found
    setUser(safeUser)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(safeUser))
    return { success: true }
  }

  function logout() {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const value = { user, isAuthenticated: !!user, loading, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>')
  return ctx
}
