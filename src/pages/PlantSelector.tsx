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
import { PlantCardPrimary } from '../components/PlantCardPrimary'

interface EnvironmentData {
  key: string
  title: string
}

interface PlantsData {
  id: number
  name: string
  about: string
  water_tips: string
  photo: string
  environments: string[],
  frequency: {
    times: number,
    repeat_every: string
  }
}

export const PlantSelector = () => {
  const [environments, setEnvironments] = useState<EnvironmentData[]>([])
  const [selectedEnvironment, setSelectedEnvironment] = useState('all')
  const [plants, setPlants] = useState<PlantsData[]>([])
  /** the "all" option is the "todos" button */
  const allEnvironmentsOption = {
    key: 'all',
    title: 'Todos'
  }

  function handleToggleEnvironment(environmentKey: string) {
    setSelectedEnvironment(environmentKey)
  }

  useEffect(() => {
    fetchPlantsEnvironmentsData()

    async function fetchPlantsEnvironmentsData() {
      const {data} = await api
        .get('/plants_environments?_sort=title&_order=asc')

      setEnvironments([
        allEnvironmentsOption,
        ...data
      ])
    }
  }, [])

  useEffect(() => {
    fetchPlantsData()

    async function fetchPlantsData() {
      const {data} = await api
        .get('/plants?_sort=name&_order=asc')

      setPlants(data)
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
              isSelected={selectedEnvironment === item.key}
              onPress={() => handleToggleEnvironment(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>

      <View style={styles.plantsContainer}>
        <FlatList
          data={plants}
          renderItem={({item}) => (
            <PlantCardPrimary
              key={item.id}
              data={{
                title: item.name,
                photo: item.photo
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.plantsList}
          numColumns={2}
        />
      </View>
    </View>
  )
}
