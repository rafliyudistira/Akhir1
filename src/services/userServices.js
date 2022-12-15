import http from "../http-common";

class userServices{
    create(data){
        return http.post("/insert", data);
    }
    getAll(){
        return http.get("/getAll");
    }
    deleteUser(id){
        return http.delete(`/delete/${id}`);
    }
    updateUser(id, data){
        return http.put(`/update/${id}`, data);
    }
    getUserById(id) {
        return http.get(`/getData/${id}`)
    }
}

export default new userServices();