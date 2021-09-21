import { useState, useEffect, useCallback } from 'react'
import * as Google from "expo-google-app-auth";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  const [data, setData] = useState({})

  useEffect(() => {
    const { accessToken, user } = data

    if (accessToken && user) {
      setAuthenticated(true)
    } 

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000); 
    return () => clearTimeout(timer);
  }, [data])
  
  const handleLogin = async () => {
    setLoading(true)
    try {
      const result = await Google.logInAsync({
        androidClientId: '682731502605-7ep4stetg8p8rr91sp1ldq7fdromf2a7.apps.googleusercontent.com',
        iosClientId: '682731502605-frvfvbi8seo0cha3gnt2hdkqr6u9neqd.apps.googleusercontent.com',
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        setLoading(false)
        return { success: true, result }
      } else {
        setLoading(false)
        return { cancelled: true };
      }
    } catch (e) {
      setLoading(false)
      return { error: true };
    }
  }

  const handleLogout = useCallback( async () => {
    setData({});
  }, [])

  return { data, setData, authenticated, setAuthenticated, loading, handleLogin, handleLogout }
}