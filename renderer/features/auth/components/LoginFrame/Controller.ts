import { usePostLogin } from "../../../../hooks/auth/usePostLogin"
import { setCurrPage } from "../../../../states/globalState"
import { setDelay } from "../../../../utils"
import { setPassword, setUsername } from "../../state/authState"

let dispatch
export class Controller {
  static instace: Controller
  public state
  route = 'dataManager/product'
  constructor(inDispatch, state) {
    dispatch = inDispatch
    this.state = state
    this.loadPage()
  }
  public static getInstance = (inDispatch, state) => {
    if(!this.instace)
      this.instace = new Controller(inDispatch, state)
    const inst = this.instace
    inst.refreshData(state)
    return inst
  }
  private refreshData = (state) => this.state = state
  private loadPage = async () => {
    await setDelay(.1)
    dispatch(setCurrPage(this.route))
  }
  public setUsername = (e) => dispatch(setUsername(e.target.value))
  public setPassword = (e) => dispatch(setPassword(e.target.value))
  public login = () => dispatch(usePostLogin(this.state.auth))
}