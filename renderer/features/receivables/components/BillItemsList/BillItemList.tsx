import React from 'react'
import style from './style.module.css'
import { StatusText } from '../../../../components/ui'
import { formatDate, getColumnByIndex as columByIndex } from '../../../../utils'

const BillItemList = ({dataSource, onClick, selectedItem, onDoubleClick}) => {
  return <div className={style.container}>
    {
      dataSource.map(item => (
        <div key={columByIndex(item, 5)} className={`${style.itemContainer} ${selectedItem && selectedItem == columByIndex(item, 5) ? style.selected : ''}`} onClick={() => onClick(columByIndex(item, 5))} onDoubleClick={() => onDoubleClick(`./bill/${columByIndex(item, 5)}`)} >
          <div>
            <span className={style.subtitle}>{`# Factura: ${columByIndex(item, 1)}`}</span>
            <StatusText 
              status={columByIndex(item, 3)} 
              text={
                columByIndex(item, 3) == "C" ? "facturado" : 
                  columByIndex(item, 3) == "P" ? "pendiente" : 
                    columByIndex(item, 3) == "D" ? "cancelada" : "indefinido"}/>
          </div>
          <div className={style.mainContent}>
            <span>{`${columByIndex(item, 0)} - $${columByIndex(item, 2)}`}</span>
            <span>{formatDate(columByIndex(item, 4), "dd/MM/yyyy hh:mm")}</span>
          </div>
          <hr className={style.hr}/>
        </div>
      ))
    }
  </div>
}

export default BillItemList