
import axiosService from './../common/ApiService'
const base_url = 'http://localhost:8088/mkeymap'

export const getList = () =>{
    return axiosService.get(base_url);
    return "";
}