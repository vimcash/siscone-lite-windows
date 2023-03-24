import { nodeFirebird } from "../../../lib/nodeFirebird"

const getDBProduct = async () => {
  const products = await nodeFirebird('SELECT name, category, code, productID, categoryID FROM VW_PRODUCT_JS')
  return products
}

export default getDBProduct