import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AppStackRoutes } from './stack.routes'

export const Routes = () => (
  <NavigationContainer>
    <AppStackRoutes />
  </NavigationContainer>
)
