import axios from "axios";
import API_URL from "../test";

const $host = axios.create({
        baseURL: API_URL
})

const $authHost = axios.create({
        baseURL: API_URL
})

const $guest = axios.create({
        baseURL: API_URL
})
const authInterceptor = config => {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
        return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
        $host,
        $authHost,
        $guest
}