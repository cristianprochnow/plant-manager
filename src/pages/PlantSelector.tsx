import React from 'react'
import {
  Text,
  View,
  FlatList
} from 'react-native'

import headerAvatar from '../assets/cristian.png'
import { EnvironmentButton } from '../components/EnvironmentButton'
import { Header } from '../components/Header'
import { styles } from '../styles/pages/plantSelector'

export const PlantSelector = () => {
  function handleSelectEnvironment() {}

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Header
          complementText="Olá,"
          emphasisText="Cristian"
          image={headerAvatar}
        />

        <View style={styles.filter}>
          <View>
            <Text style={[
              styles.filterText,
              styles.filterTextEmphasis
            ]}>Em qual ambiente</Text>
            <Text style={[
              styles.filterText,
              styles.filterTextComplement
            ]}>você quer colocar sua planta?</Text>
          </View>
        </View>
      </View>

      <View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={() => (
            <EnvironmentButton
              label="Cozinha"
              isSelected={false}
              onPress={handleSelectEnvironment}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
    </View>
  )
}
