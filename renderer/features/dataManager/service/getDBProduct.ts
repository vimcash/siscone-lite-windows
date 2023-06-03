import { nodeFirebird } from "../../../lib/nodeFirebird"

const getDBProduct = async () => {
  const products = await nodeFirebird('SELECT product, category, product_code, product_ID, category_ID, qty FROM VW_INVENTORY_JS')
  return products
}

export default getDBProduct