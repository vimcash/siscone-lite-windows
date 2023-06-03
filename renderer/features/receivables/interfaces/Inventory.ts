export interface Inventory {
  titles: string[]
  itemList: any
  filterList: any
  search: string
  productList: any
  productID: string
  qty: number
  status: 'idle' | 'pending' | 'rejected'
}