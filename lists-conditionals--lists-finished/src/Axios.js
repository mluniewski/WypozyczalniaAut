import axios from 'axios'


const axiosCar = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
})

export default axiosCar;
