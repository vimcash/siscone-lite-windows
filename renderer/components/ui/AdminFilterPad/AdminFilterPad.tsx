import { Button, RadioButton } from ".."
import { CalendarButton, InputLabel } from "../../form"

export const AdminFilterPad = ({ 
  onClickRadio, 
  radioOptions, 
  onChangeComboBox, 
  categories,
  selectedCategory, 
  onClickPrint,
  onClickReport,
  radioValue,
  dateFrom,
  dateTo,
  onChangeDateFrom,
  onChangeDateTo,
}) => {
  console.log("radioValue", radioValue)
  return (
    <div className="row pe-2 ps-2">
      <RadioButton 
        className="mb-1 me-1 col-sm-auto checkbox"
        onClick={e => onClickRadio(e)}
        options={radioOptions} 
        name="temp"
        value={radioValue}/>
      <CalendarButton 
        title="Desde"
        onChangeValue={e => onChangeDateFrom(e)}
        value={dateFrom}
        className="col-sm-auto p-0 me-1 mb-1"/>
      <CalendarButton 
        title="Hasta"
        onChangeValue={e => onChangeDateTo(e)}
        value={dateTo}
        className="col-sm-auto p-0 me-1 mb-1"/>
      <Button
        className="col-sm-auto mb-1 me-1"
        icon="report"
        title="Imprimir"
        left primary
        onClick={() => onClickPrint()}/>
      <Button
        className="col-sm-auto mb-1 me-1"
        icon="excel"
        title="Exportar"
        left primary
        onClick={() => onClickReport()}/>
    </div>
  )
}