import instance from "./instance";


export  const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {return response.data})
    }
}