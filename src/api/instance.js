import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0e80eca8-bc0a-4e06-8d26-63d07db5fb0d"
    }
})


export default instance