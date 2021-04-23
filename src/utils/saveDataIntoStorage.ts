import AsyncStorage from '@react-native-async-storage/async-storage'

export async function setDataToStorage(
  key: string,
  data: string | number | Array<unknown> | Object
) {
  const serializedData = JSON.stringify(data)

  await AsyncStorage.setItem(key, serializedData)
}
