import axios from 'axios'

const API = axios.create({
    baseURL:import.meta.env.VITE_API_URL
})

const adding = async(data)=>{
    return API.post("/adding",data)
}
const getting = async()=>{
    return API.get("/getting")
}

const updatting = async(userid,data)=>{
    return API.put(`/updating/${userid}`,data)
}

const deletting = async(userid)=>{
    return API.delete(`/deletting/${userid}`)
}
