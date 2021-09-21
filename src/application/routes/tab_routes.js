import React from 'react'
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import { Image } from 'react-native';

import Favorites from '../../presenter/screens/favorites'
import Home from '../../presenter/screens/home'
import Inspiration from '../../presenter/screens/inspirations'

const Tabs = createBottomTabNavigator()

const icons = {
  Favorites: {
    icon: require('../../../assets/icons/heart.png'),
    style: {width: 25, height: 25}
  },
  New: {
    icon: require('../../../assets/icons/plus-square.png'),
    style: {width: 35, height: 35}
  },
  Inspirations: {
    icon: require('../../../assets/icons/Stars.png'),
    style: {width: 25, height: 25}
  },
}

export default function TabRoutes() {
  return (
    <Tabs.Navigator
      initialRouteName="New"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          return <Image style={{...icons[route.name].style, opacity: color === '#fff' ? 1 : .2}} source={icons[route.name].icon} />
        }
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#FFFCFC',
          borderColor: '#dbdbdb34',
          borderRadius: 5,
          paddingTop: 5
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#000'
      }}
    >
      <Tabs.Screen name="Favorites" component={Favorites} />
      <Tabs.Screen name="New" component={Home} />
      <Tabs.Screen name="Inspirations" component={Inspiration} />
    </Tabs.Navigator> )
} 
