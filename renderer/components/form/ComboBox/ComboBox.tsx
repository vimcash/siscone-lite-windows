import style from './style.module.css'
export const ComboBox = ({className, dataSource, placeHolder, name, onChange, value, disable}:{className:string, dataSource:string[]|any[], placeHolder?:string, name:string, onChange:any, value:any, disable?:boolean}) => {
  const options = [...new Set(dataSource)]
  return (
    <div className={`${className} ${style.container}`}>
      <select className={style.component} onChange={onChange} value={value} id={name} disabled={disable}>
        <option value={""}>{placeHolder || ""}</option>
        {
          dataSource.map(option => !option.id ? <option value={option} key={option}>{option}</option> : <option value={option.id} key={option.id}>{option.displayName}</option>)
        }
      </select>
    </div>
  )
}

export default ComboBox