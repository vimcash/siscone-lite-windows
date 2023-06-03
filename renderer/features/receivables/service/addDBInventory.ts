import { nodeFirebird } from "../../../lib/nodeFirebird"
import getDBInventory from "./getDBInventory"

const addDBInventory = async ({productID, qty}:any) => {
  const query = `EXECUTE PROCEDURE sp_add_inventory('${productID}', ${qty})`
  const inventory = await nodeFirebird(query)
  const inventoryList = await getDBInventory()
  return {
    created: inventory,
    list: inventoryList
  }
}

export default addDBInventory