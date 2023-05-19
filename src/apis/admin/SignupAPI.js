import { api } from '../configs/axiosConfig'
import { defineCancelApiObject } from "../configs/axiosUtils"

export const SignupAPI = {
  signup: async function (admin) {
    try {
        const response = await api.post('/admin-signup', admin)
        return response.data
      } catch (err) {
        return err
      }
  },
}

const cancelApiObject = defineCancelApiObject(SignupAPI)
