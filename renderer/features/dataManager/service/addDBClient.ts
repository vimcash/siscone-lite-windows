import { Popup } from "../../../interfaces"
import { nodeFirebird } from "../../../lib/nodeFirebird"
import { getStrOrNullDB } from "../../../utils"
import getDBClient from "./getDBClient"

const addDBClient = async ({name, lastName, type, address, indentification}:any) => {
  const query = `EXECUTE PROCEDURE sp_add_client('${name}', ${getStrOrNullDB(lastName)}, '${type}', ${getStrOrNullDB(address)}, ${getStrOrNullDB(indentification)})`
  const client = await nodeFirebird(query)
  const clients = await getDBClient()
  return {
    created: client,
    list: clients
  }
}

export default addDBClient