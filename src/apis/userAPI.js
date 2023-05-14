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
  getById: async function (id) {
    try {
      var response = await api.get(`/users/${id}`)
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
  getUserLike: async function (data) {
    try {
      var response = await api.post('/users/brands-like', data)
      console.log('like ', response)
      return response.data
    } catch (err) {
      return err.response.status
    }
  },
  updateUserById: async function (data) {
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
