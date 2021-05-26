import {
  Plant,
  StoragePlant
} from '../types/Plant'
import { getDataFromStorage } from '../utils/getDataFromStorage'
import { setDataToStorage } from '../utils/saveDataIntoStorage'
import storageConst from '../constants/asyncStorage'

export async function savePlant(plant: Plant) {
  try {
    const data: StoragePlant[] = await getDataFromStorage(storageConst.plants) || []

    const newPlant = {
      [plant.id]: {
        data: plant
      }
    }
    const mergedPlants = [ ...data, newPlant ]

    await setDataToStorage(
      storageConst.plants,
      mergedPlants
    )
  } catch (error) {
    throw new Error(error)
  }
}

export async function loadPlants() {
  try {
    const data: StoragePlant = await getDataFromStorage(storageConst.plants)

    return data
  } catch (error) {
    throw new Error(error)
  }
}
