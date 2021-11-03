import axios from 'axios'
import { useRouter } from 'next/router'

const RefreshData = () => {
    const router = useRouter();
    router.replace(router.asPath);
}

export async function submitPet(pet) {
  const res = await axios.post(`http://localhost:8080/addPet/`, pet)

  if (res.status < 300) {
    RefreshData();
  }

  return res
}

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

    addPet(pet) {

        return axios.post(`http://localhost:8080/addPet/`, pet)
    }
}

export default new PetDataService()