import { axios } from "../../lib"

const postAPILogin = 
  (inUser:any) => axios({
    type: 'POST',
    url: 'https://api-siscone-backend-dev.vimcashcorp.com/user/login',
    data: inUser
  })


export default postAPILogin