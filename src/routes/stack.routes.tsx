import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../styles/colors'
import { Welcome } from '../pages/Welcome'
import { NameSuccess } from '../pages/NameSuccess'
import { Name } from '../pages/Name'
import { PlantSelector } from '../pages/PlantSelector'
import { PlantSaving } from '../pages/PlantSaving'
import { PlantSavingSuccess } from '../pages/PlantSavingSuccess'

const {
  Navigator,
  Screen
} = createStackNavigator()

export const AppStackRoutes = () => (
  <Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <Screen
      name="Welcome"
      component={Welcome}
    />
    <Screen
      name="NameSuccess"
      component={NameSuccess}
    />
    <Screen
      name="Name"
      component={Name}
    />
    <Screen
      name="PlantSelector"
      component={PlantSelector}
    />
    <Screen
      name="PlantSaving"
      component={PlantSaving}
    />
    <Screen
      name="PlantSavingSuccess"
      component={PlantSavingSuccess}
    />
  </Navigator>
)
