import { api } from './configs/axiosConfig'
import { defineCancelApiObject } from "./configs/axiosUtils"

export const UserAPI = {
  getAll: async function () {
    try {
      var response = await api.get('/users')
      console.log(response)
      return response.data
    } catch (err) {
      console.log('error')
      return err.response.status
    }
    // returning the product returned by the API
  },
  updateBrandsLike: async function (data) {
    try {
      var response = await api.post('/users', data)
      console.log(response)
      return response.data
    } catch (err) {
      console.log('error')
      return err.response.status
    }
    // returning the product returned by the API
  },
}

const cancelApiObject = defineCancelApiObject(UserAPI)
