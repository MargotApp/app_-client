import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthRoutes from './auth_routes'
import TabRoutes from './tab_routes'

import { Context } from '../Context/authContext' 
import Loading from '../../presenter/screens/loading'

export default function Routes() {
  const { authenticated, loading } = useContext(Context)

  if (loading) {
    return <Loading />
  }
  
  return (
    <NavigationContainer>
      {authenticated ? <TabRoutes /> :<AuthRoutes />}
    </NavigationContainer>
  )
}
