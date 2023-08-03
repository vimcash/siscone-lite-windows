import { useAddDBClient } from "../../../features/dataManager/hooks"
import { Client } from "../../../features/dataManager/interfaces"
import { setFocus } from "../../../utils"
import { hidePopup, setCheckBox, setInput1, setInput2, setInput3, setInput4 } from "./state/popupState"
import { useAddDBCategory } from "../../../features/dataManager/hooks"
import { useRunComplete } from "../../../features/receivables/hooks"

let dispatch
class Controller {
  static instace: Controller
  private state
  private saveTypes:any[] = [
    {type: 'addCategory', title: 'Agregar Categoria', placeholder: 'Nombre de la categoria', function: (e:any) => useAddDBCategory(e), iptType: 'text'},
    {type: 'completeBill', title: 'Monto a pagar', placeholder: 'Monto', function: (e:any) => useRunComplete(e), iptType: 'number'}
  ]
  constructor(inDispatch, state) {
    this.state = state
    console.log(state)
    dispatch = inDispatch
  }

  public static getInstance(inDispatch, state) {
    if(!this.instace)
      this.instace = new Controller(inDispatch, state)
    const inst = this.instace
    inst.refreshData(state)
    return inst
  }

  public refreshData(state) {
    this.state = state
  }

  public onEnter() {
    if(Controller.instace.validate())
      Controller.instace.save()
  }

  validate(required=false) {
    const { input1, input2, input3, input4, check1 } = this.state
    if(!input4.trim() && !required)
      setFocus("iptInput4")
    if(!input3.trim() && !required)
      setFocus("iptInput3")
    if(!input2.trim() && !check1)
      setFocus("iptInput2")
    if(!input1.trim())
      setFocus("iptInput1")
    
    return !!(input1.trim() && (input2.trim() || check1) && ((input3.trim() && input4.trim()) || required))
  }

  public onCheck = async () => {
    await dispatch(setCheckBox())
    setFocus("iptInput1")
  }

  public save = () => {
    const { input1, input2, input3, input4, check1 } = this.state
    if(Controller.instace.validate(true)){
      const client:Client = {
        name: input1.trim(),
        lastName: input2.trim(),
        type: check1 ? 'C':'P',
        indentification: input3.trim(),
        address: input4.trim()
      }
      dispatch(useAddDBClient(client))   
      Controller.instace.closePopup()
    }
  }

  closePopup() {
    dispatch(hidePopup())
  }

  private getPopupInfo = () => this.saveTypes.find(saveType => saveType.type == this.getType())
  public setInput1 = (e:string) => dispatch(setInput1(e))
  public setInput2 = (e:string) => dispatch(setInput2(e))
  public setInput3 = (e:string) => dispatch(setInput3(e))
  public setInput4 = (e:string) => dispatch(setInput4(e))
  public getType = () => this.state.type
  public getInput1 = () => this.state.input1
  public getInput2 = () => this.state.input2
  public getInput3 = () => this.state.input3
  public getInput4 = () => this.state.input4
  public getCheck1 = () => this.state.check1
  public getBills = () => ({...this.state.bills, billPrice: Number(this.getInput1())})
  public getCategoryName = () => ({categoryName: this.getInput1()})
  public getPopupTitle = () => this.getPopupInfo().title
  public getPopupPlaceholder = () => this.getPopupInfo().placeholder
  public getPopupInputType = () => this.getPopupInfo().iptType

  public saveSingle = async () => {
    const obj = this.getType() == 'addCategory' ? this.getCategoryName() : this.getBills()
    await dispatch(this.getPopupInfo().function(obj)).then(async() => dispatch(hidePopup()))
  }
}

export default Controller