**Siscone lite Windows**

*Tablas*
  1. Productos:
    * id
    * displayName - nombre del producto
    * categoryID
    * description
    * createdAt
    * createdBy - root
    * updatedAt
    * updatedBy - root

  2. Variety
    * id
    * displayName
    * extraValue
    * collection
    * createdAt
    * createdBy - root
    * updatedAt
    * updatedBy - root

  3. Facturas
    * id
    * clientID
    * displayName
    * invoiceType
    * invoicePrice
    * createdAt
    * createdBy - root
    * updatedAt
    * updatedBy - root

  4. Inventory
    * id
    * invoiceID? 
    * productID
    * qty
    * actionType