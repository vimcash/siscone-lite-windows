export interface Client {
  name: string 
  lastName: string
  type: string
  address: string
  indentification: string
  itemList?: any
  filterList?: any
  status?: 'idle' | 'pending' | 'rejected'
  clientID?: number | ''
}