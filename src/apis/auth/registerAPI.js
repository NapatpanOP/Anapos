import { api } from '../configs/axiosConfig'
import { defineCancelApiObject } from "../configs/axiosUtils"

export const RegisterAPI = {
  register: async function (user) {
    await api.post('/register', user)

    // returning the product returned by the API
    return response
  },
}

const cancelApiObject = defineCancelApiObject(RegisterAPI)
