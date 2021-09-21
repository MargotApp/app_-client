import React from 'react'
import { 
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'

import Welcome from '../../presenter/screens/welcome'

const Stack = createStackNavigator()

export default function AuthRoutes() {
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  )
}