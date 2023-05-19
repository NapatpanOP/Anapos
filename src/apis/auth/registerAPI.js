import { api } from '../configs/axiosConfig'
import { defineCancelApiObject } from "../configs/axiosUtils"

export const RegisterAPI = {
  register: async function (user) {
    try {
      const response = await api.post('/register', user)
      return response.data
    } catch (err) {
      return err
    }
  },
}

const cancelApiObject = defineCancelApiObject(RegisterAPI)
