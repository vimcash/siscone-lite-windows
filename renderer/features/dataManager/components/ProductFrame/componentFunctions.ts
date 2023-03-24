import { showAddCategory } from "../../../../components/generic/Popup/state/popupState"
import { useAddDBProduct, useGetDBCategory, useGetDBProduct } from "../../hooks"
import { Product } from "../../interfaces"
import { setCategoryID, setCleanCategoryID } from "../../state/Category/categoryState"
import { setClean, setCode, setProductName } from "../../state/Product/productState"

let dispatch
export class componenetFunction {
  static instace: componenetFunction
  public category: any
  public product: Product
  public isLoad: boolean

  constructor(inDispatch:any, state:any) {
    dispatch = inDispatch
    this.category = state.category
    this.product = state.product
    console.log('me construi')
  }

  public static getInstance(inDispatch:any, state:any){
    if(!this.instace)
      this.instace = new componenetFunction(inDispatch, state);
    const inst = this.instace
    inst.refreshData(state)
    inst.isLoad = state.product.status == 'unload' || state.product.status == 'unload'
    if(inst.isLoad)
      inst.loadData()
    return inst
  }
  public refreshData(state:any){
    this.category = state.category
    this.product = state.product
  }
  public showAddCategoryPopup = () => dispatch(showAddCategory())
  public save = () => dispatch(useAddDBProduct(componenetFunction.instace.product))
  public onChangeName = (value:string) => dispatch(setProductName(value))
  public onChangeCategory = (value:number) => dispatch(setCategoryID(value))
  public onChangeCode = (value:string) => dispatch(setCode(value))
  public getProductName = () => this.product.name
  public clean() {
    dispatch(setClean())
    dispatch(setCleanCategoryID())
  }
  private loadData() {
    dispatch(useGetDBCategory())
    dispatch(useGetDBProduct())
  }
}