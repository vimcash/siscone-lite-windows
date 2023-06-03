class Controller {
  static instace: Controller
  private router
  constructor(router:any) {
    this.router = router
  }
  public static getInstance(router:any){
    if(!this.instace)
      this.instace = new Controller(router);
    const inst = this.instace
    return inst
  }
  public goToProduct = () => {
    Controller.instace.router.push('dataManager/product')
  }
  public goToInventory = () => {
    Controller.instace.router.push('receivables/inventory')
  }
  public goToBills = () => {
    Controller.instace.router.push('receivables/billList')
  }
}

export default Controller