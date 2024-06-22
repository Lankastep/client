import {$guest, $host} from "./index";

export const createOrder = async (formData)=>{
    const {data} = await $guest.post('api/order', formData)
    return data
}