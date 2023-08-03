import { setCurrPage } from "../../states/globalState"
import { setDelay } from "../../utils"
import Product from '../../features/dataManager/components/ProductFrame/Controller'
import Inventory from '../../features/receivables/components/InventoryFrame/Controller'
import Bills from '../../features/receivables/components/BillsFrame/Controller'
import BillList from '../../features/receivables/components/BillListFrame/Controller'

let dispatch
export class Controller {
  static instace: Controller
  private global
  private router:any

  constructor(inDispatch:any, router:any, state:any) {
    dispatch = inDispatch
    this.global = state
    this.router = router
    this.setCurrPageDelay()
  }

  public static getInstance(inDispatch:any, router:any, state:any){
    if(!this.instace)
      this.instace = new Controller(inDispatch, router, state);
    const inst = this.instace
    inst.global = state
    return inst
  }
  public static goBack() {
    if(this.instace)
      this.instace.goToHome()
  }
  private async cleanControllers() {
    Product.clean()
    Inventory.clean()
    await Bills.clean()
    await BillList.clean()
  }

  public getIsHome = () => Controller.instace.global.currPage == 'home'
  public getTitle = () => Controller.instace.global.appTitle
  private setCurrPageDelay = async () => {
    await setDelay(.1)
    dispatch(setCurrPage('home'))
  }
  public goToHome = async () => {
    const { router, global } = Controller.instace
    await this.cleanControllers()
    delete Controller.instace
    console.log(global.currPage)
    global.currPage == 'home' ? undefined : router.push(global.currPage != 'receivables/bills' ? '/home' : '/receivables/billList')  
  }
}

export default Controller