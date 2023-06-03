import { Button } from "../../components/ui"
import { useAppSelector } from "../../hooks"
import { selectGlobal } from "../../states/globalState"
import { Controller } from "./Controller"
import style from './style.module.css'

export const Navbar = ({dispatch, router, onClickRightButton}:any) => {
  const global = useAppSelector(selectGlobal)
  const {
    getIsHome,
    goToHome
  } = Controller.getInstance(dispatch, router, global)
  return <>
    <nav className="navbar">
      <div className="container-fluid">
        {
          <span className={`navbar-brand mb-0 h1 ${!getIsHome() ? style.title : ''}`} onClick={() => goToHome()}>Producto</span>
        }
        <div className="d-flex">
          <Button icon={getIsHome() ? "setting" : "back"} className="ppr-1" onClick={() => goToHome()}/>
        </div>
      </div>
    </nav>
    <hr />
  </>
}