import { formatDate, getColumnByIndex as columByIndex, isDate, getColumnByIndex } from "../../../utils"
import style from './style.module.css'
export const Table = ({titles, dataSource, onClickWithIndexID, onDoubleClickWithIndexID}:any) => {
  let row = 0
  return (
    <div className={`${style.container}`}>
      <table className="table">
        <thead>
          <tr>
            {
              titles.map(title => (
                <th scope="col" key={title}>{title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            dataSource.map(
              object => {
                let column = 0
                return <tr 
                  key={row++} 
                  onClick={() => onClickWithIndexID ? 
                    onClickWithIndexID.func(getColumnByIndex(object, onClickWithIndexID.indexID)) : undefined}
                  onDoubleClick={() => onDoubleClickWithIndexID ? 
                    onDoubleClickWithIndexID.func(getColumnByIndex(object, onDoubleClickWithIndexID.indexID)) : undefined}>
                {
                  titles.map(() => (
                    <td scope="row" key={column}>{isDate(columByIndex(object, column))? formatDate(columByIndex(object, column++), "dd/MM/yyyy hh:mm") : columByIndex(object, column++)}</td>
                  ))
                }
                </tr>
              }
            )
          }
        </tbody>
      </table>
    </div>
  )
}