import { Request } from "../utils/interfaces/Request"
import runner from 'axios'

export const axios = ({type, url, data}:Request) => {
  switch(type){
    case 'GET': 
      return runner.get(url)
    case 'POST':
      return runner.post(url, data)
    case 'DELETE':
      return runner.delete(url)
    case 'PUT':
      return runner.put(url, data)
  }
}

export default axios