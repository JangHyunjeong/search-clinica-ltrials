//import axios from "axios";
import { instance } from './instance'

// todo 목록 조회
export const getRecommendsAPI = async (query: string) => {
  try {
    const response = await instance.get(`?q=${query}`)
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}
