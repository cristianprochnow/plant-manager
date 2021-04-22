import React from 'react'
import {
  Text,
  View
} from 'react-native'

import headerAvatar from '../assets/cristian.png'
import { EnvironmentButton } from '../components/EnvironmentButton'
import { Header } from '../components/Header'
import { styles } from '../styles/pages/plantSelector'

export const PlantSelector = () => {
  return (
    <View style={styles.container}>
      <Header
        complementText="Olá,"
        emphasisText="Cristian"
        image={headerAvatar}
      />

      <View style={styles.filter}>
        <View style={styles.filterTextBox}>
          <Text style={[
            styles.filterText,
            styles.filterTextEmphasis
          ]}>Em qual ambiente</Text>
          <Text style={[
            styles.filterText,
            styles.filterTextComplement
          ]}>você quer colocar sua planta?</Text>
        </View>

        <EnvironmentButton
          label="Cozinha"
          isSelected={false}
        />
      </View>
    </View>
  )
}
