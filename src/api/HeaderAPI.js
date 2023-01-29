import instance from "./instance";


export  const headerAPI = {
    getHeader() {
        return instance.get(`auth/me`)
            .then(response => {return response.data})
    }
}