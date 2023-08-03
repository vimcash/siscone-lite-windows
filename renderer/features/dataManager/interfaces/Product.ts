export interface Product {
  name: string,
  categoryID?: number | '',
  titles: string[],
  code?: string,
  itemList: any,
  filterList: any,
  status: string,
  productFilter: string
}