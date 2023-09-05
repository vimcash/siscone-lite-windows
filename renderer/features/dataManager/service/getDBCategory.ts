import { nodeFirebird } from "../../../lib/nodeFirebird"

const getDBCategory = async () => {
  const categories = await nodeFirebird('SELECT category_id, name FROM vw_category')
  return categories
}

export default getDBCategory