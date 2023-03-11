import axios from "../../../lib/axios";

export const getAPIProducts = 
  () => axios({
    type: 'GET',
    url: 'http://localhost:9292/api/products'
})