import { nodeFirebird } from "../../../lib/nodeFirebird"

const getDBClient= async () => {
  const clients = await nodeFirebird('SELECT name, extra_name, client_type, identification, address, special_name, client_id FROM vw_client_all_js')
  return clients
}

export default getDBClient