export interface Plant {
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
  dateTimeNotification: Date
}

export interface StoragePlant {
  [id: string]: {
    data: Plant
  }
}
