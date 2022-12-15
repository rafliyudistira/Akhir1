import http from "../http-common";

class anggotaServices{
    create(data){
        return http.post("/anggotakeluarga/insert", data);
    }
    getAll(){
        return http.get("/anggotakeluarga/getAll");
    }
    deleteAnggota(id){
        return http.delete(`/anggotakeluarga/delete/${id}`);
    }
    updateAnggota(id, data){
        return http.put(`/anggotakeluarga/update/${id}`, data);
    }
    getIdKk(id) {
        return http.get(`/anggotakeluarga/getIdKk/${id}`)
    }
    getAnggotaById(id) {
        return http.get(`/anggotakeluarga/getAnggotaById/${id}`)
    }
}

export default new anggotaServices();