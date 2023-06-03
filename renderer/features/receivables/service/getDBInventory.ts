import { nodeFirebird } from "../../../lib/nodeFirebird"

const getDBInventory = async () => await nodeFirebird('SELECT product, category, qty, product_code, product_id, category_id FROM VW_INVENTORY_JS')
export default getDBInventory