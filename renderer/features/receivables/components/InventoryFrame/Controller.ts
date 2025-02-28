import { setCurrPage } from "../../../../states/globalState"
import { setDelay, setFocus } from "../../../../utils"
import { useGetDBProduct } from "../../../dataManager/hooks"
import { useAddInventory } from "../../hooks"
import { useGetInventory } from "../../hooks/useGetInventory"
import { setClean, setProductID, setQty, setSearchInventory } from "../../state/inventoryState/inventoryState"

let dispatch
class Controller {
  static instance
  private inventory

  constructor(inDispatch:any, state:any) {
    dispatch = inDispatch
    this.inventory = state.inventory
    this.loadData()
    this.setCurrPageDelay()
  }
  
  public static clean = () => delete Controller.instance
  public static getInstance(inDispatch:any, state:any){
    if(!this.instance)
      this.instance = new Controller(inDispatch, state);
    const inst = this.instance
    inst.refreshData(state)
    return inst
  }
  public loadData(){
    dispatch(useGetDBProduct())
    dispatch(useGetInventory())
  }

  public refreshData(state:any){
    this.inventory = state.inventory
  }

  private setCurrPageDelay = async () => {
    await setDelay(.1)
    dispatch(setCurrPage('receivables/inventory'))
  }
  public setClean = () => dispatch(setClean())
  public getSearch = () => this.inventory.search
  public getTitles = () => this.inventory.titles
  public getProductID = () => this.inventory.productID
  public getQty = () => this.inventory.qty
  public getFilterList = () => this.inventory.filterList || []
  public getProductList = () => this.inventory.productList || []
  public onChangeProduct = (e:number) => {
    dispatch(setProductID(e))
    setFocus("iptQty")
  }
  public onChangeSearch = (e) => dispatch(setSearchInventory(e))
  public onDoubleClick = () => ({func: this.onChangeProduct, indexID: 4})
  private checkValues = () => {
    const { productID, qty } = this.inventory
    if(qty == 0)
      setFocus("iptQty")
    if(productID == "")
      setFocus("cbProduct")
    return (productID != "" && qty != 0)
  }
  public onChangeQty = (e:number) => dispatch(setQty(e))
  public save = () => {
    if(this.checkValues())
      dispatch(useAddInventory(Controller.instance.inventory))
  }
}

export default Controller