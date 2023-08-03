import axios from "../../../lib/axios"

const getDBCategory = () => 
  axios({type: 'GET', url: 'http://127.0.0.1:3000/category/list'})
    .then(resp => resp.data)

export default getDBCategory