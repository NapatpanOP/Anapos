import { api } from './configs/axiosConfig'
import { defineCancelApiObject } from "./configs/axiosUtils"

export const BrandAPI = {
  getAll: async function () {
    try {
      var response = await api.get('/brands')
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
      var response = await api.get(`/brands/${id}`)
      console.log(response)
      return response.data
    } catch (err) {
      console.log('error')
      return err.response.status
    }
    // returning the product returned by the API
  },
  updateLike: async function (data) {
    try {
      var response = await api.post('/brands', data)
      console.log(response)
      return response.data
    } catch (err) {
      console.log('error')
      return err.response.status
    }
    // returning the product returned by the API
  },
  updateBrandById: async function (data) {
    try {
      var response = await api.post('/brands', data)
      console.log(response)
      return response.data
    } catch (err) {
      console.log('error')
      return err.response.status
    }
    // returning the product returned by the API
  },
}

const cancelApiObject = defineCancelApiObject(BrandAPI)
