import { nodeFirebird } from "../../../lib/nodeFirebird"
import { getStrOrNullDB } from "../../../utils"
import getDBBills from "./getDBBills"

const runDBCompleteBill = async ({billID, billPrice}:any) => {
  const query = `execute procedure SP_COMPLETE_BILL(${billID}, ${billPrice})`
  console.log(getStrOrNullDB(billID))
  const productBill = await nodeFirebird(query)
  const bills = await getDBBills()
  return {
    list: bills
  }
}

export default runDBCompleteBill