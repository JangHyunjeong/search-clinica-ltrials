import axios from 'axios'

const BASE_URL = 'https://json-server-ashen-tau.vercel.app/sick'

export const instance = axios.create({
  baseURL: BASE_URL,
})
