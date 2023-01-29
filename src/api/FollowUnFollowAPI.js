import instance from "./instance";


export  const followAPI = {
    postFollow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => {return response.data})
    }
}

export  const unFollowAPI = {
    deleteFollow(id) {
        return instance.delete(`follow/${id}`, {})
            .then(response => {return response.data})
    }
}