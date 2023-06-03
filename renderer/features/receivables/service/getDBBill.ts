import { nodeFirebird } from "../../../lib/nodeFirebird"

const getDBBill = async (inBillID:number) => {
  const list = await nodeFirebird(`SELECT PRODUCT, CATEGORY, QTY, PRODUCT_CODE,  BILL_NUMBER, PRODUCT_ID, CATEGORY_ID, BILL_ID, CLIENT_ID FROM VW_BILL_ITEMS WHERE BILL_ID = ${inBillID}`)
  return {
    list: list,
    created: { 
      billID: list[0].BILL_ID,
      clientID: list[0].CLIENT_ID
    }
  }
}
export default getDBBill