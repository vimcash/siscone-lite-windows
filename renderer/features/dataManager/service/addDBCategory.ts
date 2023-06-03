import { nodeFirebird } from "../../../lib/nodeFirebird"
import getDBCategory from "./getDBCategory"

const addDBCategory = async (inCategoryName:string) => {
  const category = await nodeFirebird(`SELECT category_id, category_name FROM SP_ADD_CATEGORY('${inCategoryName}')`)
  const categories = await getDBCategory()
  return {
    created: category[0],
    list: categories
  }
}

export default addDBCategory