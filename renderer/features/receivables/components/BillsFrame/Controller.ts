import { showAddClient, showCompleteBill } from "../../../../components/generic/Popup/state/popupState"
import { setCurrPage } from "../../../../states/globalState"
import { setDelay, setFocus } from "../../../../utils"
import { useGetDBClient, useGetDBProduct } from "../../../dataManager/hooks"
import { useAddProductBill } from "../../hooks"
import { useGetBill } from "../../hooks/useGetBill"
import { fullClean, setClientID, setProduct, setQty } from "../../state/billsState/billsState"

let dispatch
class Controller {
  static instance: Controller
  public clientList
  public productList
  public bills
  public inputs = () => {
    const {clientList, productList, bills, onChangeClient, onChangeProduct, onChangeQty, save} = Controller.instance
    return [
      { type: 'combo', name: 'cbClient', value: bills.clientID, onClickSearch:() =>  console.log("Like"), onClickCreate:() => Controller.instance.showClientPopup(), data: clientList || [], title: 'Cliente', onChange:(e) => onChangeClient(e.target.value), disable: !!bills.billID},
      { type: 'combo', name: 'cbProduct', value: bills.productID, onClickSearch:() =>  console.log("Like"), data: productList || [], title: 'Producto', onChange:(e) => onChangeProduct(e.target.value) },
      { type: 'number', name: 'iptQty', value: bills.qty, onClickAdd:() =>  save(), title: 'Cantidad', onChange:(e) => onChangeQty(e), onEnter:(e) => console.log(e), subtitle:` - Disponibles: ${bills.qtyDisp}`}
    ]
  }
  constructor (inDispatch, billID) {
    dispatch = inDispatch
    this.asyncLoad(billID)
  }
  public static getInstance(inDispatch, state, billID){
    console.log(billID)
    if(!this.instance)
      this.instance = new Controller(inDispatch, billID)
    this.instance.refreshData(state)
    return this.instance
  }
  public showCompleteBillPopup = () => dispatch(showCompleteBill())
  public showClientPopup = () => dispatch(showAddClient())
  public refreshData = (state) => {
    this.clientList = state.dataManager.client.filterList
    this.productList = state.dataManager.product.filterList
    this.bills = state.bills
  }
  private loadData() {
    dispatch(useGetDBClient())
    dispatch(useGetDBProduct())
  }
  public static clean = async () => {
    if(dispatch){
      await dispatch(fullClean())
      dispatch = undefined
      delete Controller.instance
    }
  }
  private validateEmpty = () => {
    if(typeof window == 'undefined')
      return false
    const { clientID, productID, qty } = Controller.instance.bills
    if(!qty)
      setFocus('iptQty')
    if(!productID)
      setFocus('cbProduct')
    if(!clientID)
      setFocus('cbClient')
    return !!(clientID && productID && qty)
  }
  private asyncLoad = async (billID) => {
    await setDelay(.1)
    await dispatch(setCurrPage('receivables/bills'))
    if(billID)
      dispatch(useGetBill(billID))
    this.loadData()
  }
  private onChangeClient = (e:number) => dispatch(setClientID(e))
  private onChangeProduct = (e:number) => dispatch(setProduct(Controller.instance.productList.find(product => product.id == e)))
  private onChangeQty = (e:number) => dispatch(setQty(e))
  private save = async() => {
    if(this.validateEmpty()){
      await dispatch(useAddProductBill(Controller.instance.bills))
      dispatch(useGetDBProduct())
    }
  }
}

export default Controller