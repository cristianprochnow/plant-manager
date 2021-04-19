import {
  StyleSheet,
  Platform
} from 'react-native'

const isAnAndroidDevice = Platform.OS === 'android'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAnAndroidDevice ? 25 : 0
  }
})
