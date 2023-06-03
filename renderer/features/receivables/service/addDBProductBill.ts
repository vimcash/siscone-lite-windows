import { nodeFirebird } from "../../../lib/nodeFirebird"
import { getStrOrNullDB } from "../../../utils"
import getDBBill from "./getDBBill"

const addDBProductBill = async ({billID, productID, clientID, qty}:any) => {
  const query = `execute procedure SP_ADD_PRODUCT_BILL(${getStrOrNullDB(billID, true)}, ${clientID}, ${productID}, ${qty})`
  console.log(getStrOrNullDB(billID))
  const proeductBill = await nodeFirebird(query)
  const bill = await getDBBill(proeductBill.O_BILL_ID)
  return {
    created: proeductBill,
    list: bill.list
  }
}

export default addDBProductBill