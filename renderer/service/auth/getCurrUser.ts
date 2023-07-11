import { axios } from "../../lib"

const getCurrUser = 
  () => axios({
    type: 'GET',
    url: `https://api-siscone-backend-dev.vimcashcorp.com/user/currentUser`
  })

export default getCurrUser