import { useAddDBCategory } from "../../../../../features/dataManager/hooks"
import { useRunComplete } from "../../../../../features/receivables/hooks"

interface Interface {
  type: 'addCategory' | 'completeBill',
  title: string,
  placeholder: string,
  function: any,
  iptType : 'number' | 'text'
}
const saveTypes:Interface[] = [
  {type: 'addCategory', title: 'Agregar Categoria', placeholder: 'Nombre de la categoria', function: (e:any) => useAddDBCategory(e), iptType: 'text'},
  {type: 'completeBill', title: 'Monto a pagar', placeholder: 'Monto', function: (e:any) => useRunComplete({...e.bills, billPrice: Number(e.popup.input1)}), iptType: 'number'}
]

export default saveTypes