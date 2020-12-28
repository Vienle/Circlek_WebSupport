
import axiosService from './../common/ApiService'
const base_url = 'http://localhost:8088/product?iobs='

export const getList = (itemcode) =>{
    const url = base_url + itemcode
    console.log(url)
    console.log('getList',axiosService.get(`${base_url}${itemcode}`))
    return axiosService.get(`${base_url}${itemcode}`);
}