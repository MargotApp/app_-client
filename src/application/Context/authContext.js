import React, { createContext } from 'react'

import useAuth from '../hooks/useAuth'

const Context = createContext()

function AuthProvider({ children }) {
  const { data, setData, authenticated, setAuthenticated, loading, handleLogin, handleLogout } = useAuth()

  return (
    <Context.Provider value={{ data, setData, authenticated, setAuthenticated, loading, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };