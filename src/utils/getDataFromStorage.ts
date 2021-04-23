import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getDataFromStorage(key: string) {
  const data = await AsyncStorage.getItem(key)
  const parsedData = JSON.parse(data as string)

  return parsedData
}
