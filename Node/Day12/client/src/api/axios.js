import axios from 'axios'

const API = axios.create({
    baseURL:import.meta.env.VITE_API_URL
})

export const registerData = (data)=>{
    return API.post("/auth/registerdata",data)
}