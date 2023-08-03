import axios from "../../../lib/axios"

const addDBCategory = 
  async (inCategoryName:string) => 
    axios({type: 'POST', url: 'http://127.0.0.1:3000/category/add', data: {name: inCategoryName}})
      .then(resp => resp.data)
export default addDBCategory