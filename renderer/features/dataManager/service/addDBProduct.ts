import { nodeFirebird } from "../../../lib/nodeFirebird"
import { Product } from "../interfaces"
import getDBProduct from "./getDBProduct"

const addDBProduct = async ({name, categoryID, code}:Product) => {
  const query = `EXECUTE PROCEDURE sp_add_product('${name}', ${categoryID}, '${code || ''}')`
  const product = await nodeFirebird(query)
  const products = await getDBProduct()
  return {
    created: product,
    list: products
  }
}

export default addDBProduct