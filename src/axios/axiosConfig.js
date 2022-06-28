import axios from 'axios';
import { changeLoader } from '../store/actions/loader';
import store from '../store/store'
const instance=axios.create({

    baseURL:"https://newsapi.org/v2/",
    params:{
        apiKey:"5a72e6ea7b5640b8a0422619db6c9d91"
    }
})


instance.interceptors.request.use(function(config){

    store.dispatch(changeLoader(true))
    return config
},function(err){

    return Promise.reject(err)
})


instance.interceptors.response.use(function(response){
 store.dispatch(changeLoader(false))
    return response
},function(err){

    return Promise.reject(err)
})


export default instance