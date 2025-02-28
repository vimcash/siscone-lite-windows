import { showAddCategory } from "../../../../components/generic/Popup/state/popupState"
import { setCurrPage } from "../../../../states/globalState"
import { setDelay } from "../../../../utils"
import { useAddDBProduct, useGetDBCategory, useGetDBProduct } from "../../hooks"
import { Product } from "../../interfaces"
import { setCategoryID, setCleanCategoryID } from "../../state/Category/categoryState"
import { setClean, setCode, setProductName, setSearchProduct } from "../../state/Product/productState"

let dispatch
class Controller {
  static instace: Controller
  private category: any
  private product: Product

  constructor(inDispatch:any, state:any) {
    dispatch = inDispatch
    this.category = state.category
    this.product = state.product
    this.loadData()
    this.setCurrPageDelay()
  }
  public static clean = () => delete Controller.instace
  public static getInstance(inDispatch:any, state:any){
    if(!this.instace)
      this.instace = new Controller(inDispatch, state);
    const inst = this.instace
    inst.refreshData(state)
    return inst
  }
  public refreshData(state:any){
    this.category = state.category
    this.product = state.product
  }

  public showAddCategoryPopup = () => dispatch(showAddCategory())
  public save = () => dispatch(useAddDBProduct(Controller.instace.product))
  public onChangeName = (value:string) => dispatch(setProductName(value))
  public onChangeSearch = (value:string) => dispatch(setSearchProduct(value))
  public onChangeCategory = (value:number) => dispatch(setCategoryID(value))
  public onChangeCode = (value:string) => dispatch(setCode(value))
  public getProductName = () => this.product.name
  public getProductCode = () => this.product.code
  public getCategoryID = () => this.product.categoryID
  public getCategoryList = () => this.category.itemList || []
  public getTitles = () => this.product.titles
  public getProductList = () => this.product.filterList || []
  public getSearchText = () => this.product.productFilter
  public isPending = () => Controller.instace.product.status == 'pending' || Controller.instace.category.status == 'pending'
  public clean() {
    dispatch(setClean())
    dispatch(setCleanCategoryID())
  }
  private loadData() {
    dispatch(useGetDBCategory())
    dispatch(useGetDBProduct())
  }
  private setCurrPageDelay = async () => {
    await setDelay(.1)
    dispatch(setCurrPage('dataManager/product'))
  }
}

export default Controller