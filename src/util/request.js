import axios from 'axios'


export default ({data,url,method = 'GET',parmas}) =>{
    return axios({
        data,
        url,
        method,
        parmas
    }).then(result=>result.data)
        .catch(error =>error )
}