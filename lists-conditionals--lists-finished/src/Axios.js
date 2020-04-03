import axios from 'axios'


const axiosCar = axios.create({
    baseURL:"https://auta-3c3ce.firebaseio.com/"
})

export default axiosCar;
