import { nodeFirebird } from "../../../lib/nodeFirebird"

const getDBBills = async () => await nodeFirebird(`SELECT SPECIAL_NAME, BILL_NUMBER, BILL_AMOUNT, BILL_STATUS, CREATED_AT, BILL_ID, CLIENT_ID FROM VW_BILLS_JS`) 
export default getDBBills