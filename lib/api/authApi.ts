import { axios } from "../axios"
import { LoginType, RegiterType } from "../validators/auth"

export const authApi = {
  signup: async (userDetails: RegiterType) => {
    const response = await axios.post("api/auth/register", userDetails)
    return response.data
  },

  signin: async (userDetails: LoginType) => {
    const response = await axios.post("api/auth/login", userDetails)
    return response.data
  },

  //   googleAuth: async () => {
  //     const response = await axios.post("api/auth/google")
  //     return response.data
  //   },

  //   logout: async () => {
  //     const response = await axios.post("api/auth/logout")
  //     return response.data
  //   },

  getProfile: async () => {
    const response = await axios.get("api/auth/profile")
    console.log("🚀 ~ getProfile: ~ response:", response)
    return response.data
  },

  refreshToken: async () => {
    const response = await axios.post("api/auth/refresh")
    return response.data
  },
}
