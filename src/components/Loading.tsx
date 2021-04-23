import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'

import { styles } from '../styles/components/loading'
import loadingAnimation from '../assets/load.json'

export const Loading = () => {
  return (
    <View style={styles.animationContainer}>
      <LottieView
        source={loadingAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  )
}
