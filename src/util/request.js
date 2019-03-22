import axios from 'axios'


export default ({data={},url,method = 'GET',params={}}) =>{
    return axios({
        data,
        url,
        method,
        params
    }).then(result=>result.data)
        .catch(error =>error )
}