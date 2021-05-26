import React from 'react'
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import FeatherIcons from 'react-native-vector-icons/Feather'

import { PlantSelector } from '../pages/PlantSelector'
import { MyPlants } from '../pages/MyPlants'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

const { Navigator, Screen } = createBottomTabNavigator()

export const AppTabsRoutes = () => (
  <Navigator tabBarOptions={{
    activeTintColor: colors.green,
    inactiveTintColor: colors.text,
    style: {
      height: 72
    },
    labelPosition: 'beside-icon',
    labelStyle: {
      fontSize: 16,
      fontFamily: fonts.jost[500]
    },
  }}>
    <Screen
      name="PlantSelector"
      component={PlantSelector}
      options={{
        title: 'Nova planta',
        tabBarIcon: ({ color, size }) => (
          <FeatherIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        )
      }}
    />
    <Screen
      name="MyPlants"
      component={MyPlants}
      options={{
        title: 'Minhas plantas',
        tabBarIcon: ({ color, size }) => (
          <FeatherIcons
            name="list"
            color={color}
            size={size}
          />
        )
      }}
    />
  </Navigator>
)
