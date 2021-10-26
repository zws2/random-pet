import axios from 'axios'

class EmployeeDataService {
    
    retrieveAllEmployees() {
        return axios.get(`http://localhost:8080/retrieveAllEmployees`);
    }
    
    deleteEmployee(id) {
        return axios.delete(`http://localhost:8080/deleteEmployee/${id}`)
    }

    updateEmployee(employee) {
        return axios.put(`http://localhost:8080/updateEmployee/`, employee)
    }

    createEmployee(employee) {
        return axios.post(`http://localhost:8080/addEmployee/`, employee)
    }
}

export default new EmployeeDataService()