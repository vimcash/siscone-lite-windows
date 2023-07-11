import Link from "next/link"
import { Button } from "../../components/ui"

export const Navbar = 
  ( 
    {title, home, onClickRightButton}:
    {title:string, home?:boolean, onClickRightButton:any}
  ) => (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          {
            !home ?
              <Link href="/home">
                <span className="navbar-brand mb-0 h1">{title}</span>
              </Link>
            :
              <span className="navbar-brand mb-0 h1">{title}</span>
          }
          <div className="d-flex">
            <Button icon={home ? "setting":"back"} className="ppr-1" onClick={() => onClickRightButton()}/>
            <Button icon={home ? "setting":"back"} className="ppr-1 ms-1" onClick={() => onClickRightButton()}/>
          </div>
        </div>
      </nav>
      <hr />
    </div>

  )