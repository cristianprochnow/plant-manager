import React, { useState } from 'react'
import {
  Alert,
  Platform,
  Text,
  View
} from 'react-native'
import Emoji from 'react-native-emoji'
import { SvgFromUri } from 'react-native-svg'
import { useRoute } from '@react-navigation/core'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import {
  format,
  isBefore
} from 'date-fns'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { ActionButton } from '../components/ActionButton'
import { PlantTip } from '../components/PlantTip'
import { styles } from '../styles/pages/plantSaving'
import { Plant } from '../types/Plant'
import {
  loadPlants,
  savePlant
} from '../libs/storage'

interface RouteParams {
  plant: Plant
}

export const PlantSaving = () => {
  const route = useRoute()
  const {plant} = route.params as RouteParams
  const [selectedDateTime, setSelectedDateTime] = useState(new Date())
  const [isDataPickerVisible, setDataPickerVisible] = useState(Platform.OS === 'ios')
  const isAnAndroidDevice = Platform.OS === 'android'

  function handleChangeDateTime(
    event: Event,
    dateTime: Date | undefined | number
  ) {
    const isSelectedDataTimeBeforeThanNow = isBefore(
      dateTime as number | Date,
      new Date()
    )
    const isDateTimeSelected = !!dateTime

    if (isAnAndroidDevice)
      setDataPickerVisible(oldState => !oldState)

    if (isDateTimeSelected && isSelectedDataTimeBeforeThanNow) {
      setSelectedDateTime(new Date())
      Alert.alert('Escolha uma hora no futuro! ⏰')

      return
    }

    if (isDateTimeSelected) {
      setSelectedDateTime(dateTime as Date)
    }
  }

  function handleActiveDateTimePickerAtAndroidDevice() {
    setDataPickerVisible(oldState => !oldState)
  }

  async function handleSavePlant() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      })

      Alert.alert('Aviso salvo! 🎉')
    } catch (error) {
      Alert.alert('Não foi possível salvar a planta. 😥')
      console.log(error)
    }
  }

  return (
    <View style={styles.plantSavingContainer}>
      <View style={styles.plantContainer}>
        <SvgFromUri
          uri={plant.photo}
          height={190}
        />

        <Text style={styles.plantName}>
          {plant.name}
        </Text>
        <Text style={styles.plantDescription}>
          {plant.about}
        </Text>
      </View>

      <View style={styles.timerContainer}>
        <PlantTip
          text={plant.water_tips}
        />

        <View>
          <Text style={styles.timerLabel}>
            Escolha o melhor horário para ser lembrado:
          </Text>

          {
            isDataPickerVisible && (
              <DateTimePicker
                value={selectedDateTime}
                mode="time"
                onChange={handleChangeDateTime}
              />
            )
          }

          {
            isAnAndroidDevice && (
              <TouchableOpacity
                onPress={handleActiveDateTimePickerAtAndroidDevice}
                style={styles.dateTimeSelectorActivatorButton}
              >
                <Emoji name="clock1" />
                <Text style={styles.dateTimeSelectorActivatorText}>
                  {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                </Text>
              </TouchableOpacity>
            )
          }
        </View>

        <ActionButton
          label="Cadastrar planta"
          onPress={handleSavePlant}
        />
      </View>
    </View>
  )
}
