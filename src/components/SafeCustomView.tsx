import React, { ReactNode } from 'react'
import {
  SafeAreaView,
  StyleProp,
  ViewStyle
} from 'react-native'

import { styles } from '../styles/components/safeCustomView'

interface SafeCustomViewProps {
  customStyles?: StyleProp<ViewStyle>
  children: ReactNode
}

export const SafeCustomView = ({
  children,
  customStyles
}: SafeCustomViewProps) => {
  return (
    <SafeAreaView style={[styles.container, customStyles]}>
      {children}
    </SafeAreaView>
  )
}
