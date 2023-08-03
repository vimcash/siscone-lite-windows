import { setCurrPage } from "../../../../states/globalState"
import { setDelay } from "../../../../utils"
import { useGetBills } from "../../hooks"
import { fullClean, setSearchBill, setSelectedBillID } from "../../state/billsState/billsState"
import Bill from '../BillsFrame/Controller'

let dispatch
class Controller {
  static instance: Controller
  private bills
  private router
  constructor(inDispatch, router) {
    dispatch = inDispatch
    this.setCurrPageDelay()
    this.loadData()
    this.router = router
  }

  public static getInstance(inDispatch, state, router) {
    if(!this.instance)
      this.instance = new Controller(inDispatch, router)
    this.instance.refreshData(state)
    return this.instance
  }

  public static async clean() {
    if(dispatch)
      await dispatch(fullClean())
    dispatch = undefined
    delete Controller.instance
  }
  private refreshData = (state) => this.bills = state
  public getBillsList = () => this.bills.billsFilter || []
  public getSelectedBillID = () => this.bills?.selectedBillID || "" 
  public getSearchBill = () => this.bills?.searchBill || "" 
  public onClickBill = (billID) => dispatch(setSelectedBillID(billID))
  public onChangeFilter = (filterText) => dispatch(setSearchBill(filterText))
  private loadData() {
    dispatch(useGetBills())
  }
  
  private setCurrPageDelay = async () => {
    await setDelay(.1)
    dispatch(setCurrPage('receivables/billList'))
  }

  public redirect = async (to:string) => {
    // if (typeof window != 'undefined')
    Bill.clean()
    Controller.instance.router.push(to)
  }
}

export default Controller