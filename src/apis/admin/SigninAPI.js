import { api } from '../configs/axiosConfig'
import { defineCancelApiObject } from "../configs/axiosUtils"
import CryptoJS from 'crypto-js'

export const SigninAPI = {
  get: async function ({password = "1"}) {
    console.log(password)
    const ciphertext = CryptoJS.AES.encrypt(password, 'OKIOKI007').toString();
    console.log(ciphertext)
    try {
      const response = await api.get('/')
      return response.data
    } catch (err) {
      console.log('error')
      return err.response.status
    }

    // returning the product returned by the API
    
  },
  signin: async function (admin) {
    console.log(admin)
    try {
      const response = await api.post('/admin-signin', admin)
      return response.data
    } catch (err) {
      return err
    }
  }
}

const cancelApiObject = defineCancelApiObject(SigninAPI)
