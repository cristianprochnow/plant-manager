import React, {
  useEffect,
  useState
} from 'react'
import {
  Text,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { EnvironmentButton } from '../components/EnvironmentButton'
import { Header } from '../components/Header'
import { PlantCardPrimary } from '../components/PlantCardPrimary'
import { Loading } from '../components/Loading'
import { styles } from '../styles/pages/plantSelector'
import colors from '../styles/colors'
import headerAvatar from '../assets/cristian.png'
import { api } from '../services/api'
import { getDataFromStorage } from '../utils/getDataFromStorage'
import storageConstants from '../constants/asyncStorage'
import { Plant } from '../types/Plant'

interface EnvironmentData {
  key: string
  title: string
}

export const PlantSelector = () => {
  const navigation = useNavigation()
  const [environments, setEnvironments] = useState<EnvironmentData[]>([])
  const [selectedEnvironment, setSelectedEnvironment] = useState('all')
  const [plants, setPlants] = useState<Plant[]>([])
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([])
  const [isLoading, setLoading] = useState(true)
  const [contentPage, setContentPage] = useState(1)
  const [hasMoreContentToLoad, setMoreContentToLoad] = useState(true)
  const [userName, setUserName] = useState('')
  /** the "all" option is the "todos" button */
  const allEnvironmentsOption = {
    key: 'all',
    title: 'Todos'
  }

  function handleToggleEnvironment(environmentKey: string) {
    setSelectedEnvironment(environmentKey)
    filterPlants(environmentKey)

    function filterPlants(environment: string) {
      const isSelectAllEnvironmentsOption = environment === allEnvironmentsOption.key

      if (isSelectAllEnvironmentsOption) {
        setFilteredPlants(plants)
      } else {
        const filteredPlants = getPlantsByEnvironment(environmentKey)

        setFilteredPlants(filteredPlants)

        function getPlantsByEnvironment(environment: string) {
          return plants
            .filter(plant => plant.environments.includes(environment))
        }
      }
    }
  }

  async function fetchPlantsData() {
    const {data} = await api
      .get(`/plants?_sort=name&_order=asc&_page=${contentPage}&_limit=8`)

    if (!data) {
      setLoading(true)

      return
    }

    if (contentPage > 1) {
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlants(data)
      setFilteredPlants(data)
    }

    setLoading(false)
    setMoreContentToLoad(false)
  }

  function handleFetchMoreData(scrollDistance: number) {
    if (scrollDistance < 1) return

    setMoreContentToLoad(true)
    setContentPage(oldValue => oldValue + 1)
    fetchPlantsData()
  }

  function handleNavigateToPlantSave(plant: Plant) {
    navigation.navigate('PlantSaving', {plant})
  }

  /** fetch needed data (i.e. plants and environments) */
  useEffect(() => {
    fetchData()

    async function fetchData() {
      await fetchPlantsEnvironmentsData()
      await fetchPlantsData()
      setLoading(false)

      async function fetchPlantsEnvironmentsData() {
        const {data} = await api
          .get('/plants_environments?_sort=title&_order=asc')

        setEnvironments([
          allEnvironmentsOption,
          ...data
        ])
      }
    }
  }, [])

  /** get user name saved into AsyncStorage from device */
  useEffect(() => {
    handleSetUserName()

    async function handleSetUserName() {
      const userNameFromStorage = await getDataFromStorage(storageConstants.user)

      setUserName(userNameFromStorage)
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Header
          complementText="Olá,"
          emphasisText={userName}
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

      {
        isLoading
          ? (<Loading />)
          : (
            <>
              <View>
                <FlatList
                  data={environments}
                  keyExtractor={item => String(item.key)}
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
                  data={filteredPlants}
                  keyExtractor={item => String(item.id)}
                  renderItem={({item}) => (
                    <PlantCardPrimary
                      key={item.id}
                      data={{
                        title: item.name,
                        photo: item.photo
                      }}
                      onPress={() => handleNavigateToPlantSave(item)}
                    />
                  )}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.plantsList}
                  numColumns={2}
                  onEndReachedThreshold={0.1}
                  onEndReached={({distanceFromEnd}) => handleFetchMoreData(distanceFromEnd)}
                  ListFooterComponent={
                    hasMoreContentToLoad
                      ? <ActivityIndicator color={colors.green} />
                      : <></>
                  }
                />
              </View>
            </>
          )
      }
    </View>
  )
}
