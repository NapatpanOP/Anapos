import { api } from '../configs/axiosConfig'
import { defineCancelApiObject } from "../configs/axiosUtils"

export const SuggestionAPI = {
  getAll: async function () {
    try {
      var response = await api.get('/suggestion')
      console.log(response)
      return response.data
    } catch (err) {
      console.log('error')
      return err.response.status
    }
  },
  add: async function (data) {
    try {
      var response = await api.post('/suggestion', data)
      console.log(response)
      return response.data
    } catch (err) {
      console.log('error')
      return err.response.status
    }
  }
}

const cancelApiObject = defineCancelApiObject(SuggestionAPI)
