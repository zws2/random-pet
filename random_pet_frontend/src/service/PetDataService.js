import axios from 'axios'

class PetDataService {
    
    retrieveAllPets() {
        return axios.get(`http://localhost:8080/retrieveAllPets`);
    }

    retrievePet(id) {
        return axios.get(`http://localhost:8080/retrievePet/${id}`);
    }

    deletePet(id) {
        return axios.delete(`http://localhost:8080/deletePet/${id}`)
    }

    updatePet(pet) {
        return axios.put(`http://localhost:8080/updatePet/`, pet)
    }

    createPet(pet) {
        return axios.post(`http://localhost:8080/addPet/`, pet)
    }
}

export default new PetDataService()