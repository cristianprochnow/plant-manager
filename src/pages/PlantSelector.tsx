import React, {
  useEffect,
  useState
} from 'react'
import {
  Text,
  View,
  FlatList
} from 'react-native'

import { EnvironmentButton } from '../components/EnvironmentButton'
import { Header } from '../components/Header'
import { api } from '../services/api'
import headerAvatar from '../assets/cristian.png'
import { styles } from '../styles/pages/plantSelector'

interface EnvironmentData {
  key: string
  title: string
}

export const PlantSelector = () => {
  const [environments, setEnvironments] = useState<EnvironmentData[]>([])
  const [selectedEnvironments, setSelectedEnvironments] = useState<string[]>([])

  function handleToggleEnvironment(environmentKey: string) {
    const isEnvironmentAtArray = selectedEnvironments.includes(environmentKey)

    if (isEnvironmentAtArray) {
      unselectEnvironment(environmentKey)
    } else {
      selectEnvironment(environmentKey)
    }

    function selectEnvironment(environmentKey: string) {
      setSelectedEnvironments([...selectedEnvironments, environmentKey])
    }

    function unselectEnvironment(environmentKey: string) {
      const filteredEnvironments = selectedEnvironments
        .filter(environmentItem => environmentItem !== environmentKey)

      setSelectedEnvironments(filteredEnvironments)
    }
  }

  useEffect(() => {
    fetchPlantEnvironmentData()

    async function fetchPlantEnvironmentData() {
      const {data} = await api.get('/plants_environments')

      setEnvironments(data)
    }
  }, [])

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
          data={environments}
          renderItem={({item}) => (
            <EnvironmentButton
              key={item.key}
              label={item.title}
              isSelected={selectedEnvironments.includes(item.key)}
              onPress={() => handleToggleEnvironment(item.key)}
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
