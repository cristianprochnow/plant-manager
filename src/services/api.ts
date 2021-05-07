import axios from 'axios'

import connectionConst from '../constants/connection'

export const api = axios.create({
  baseURL: `http://${connectionConst.host}:${connectionConst.port}/`
})
