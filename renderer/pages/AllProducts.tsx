import React, { useState } from 'react'
import { Add } from "@mui/icons-material";
import { Box, Stack, Typography, Avatar } from "@mui/material"
import { DataGrid, GridActionsCellItemProps, GridColDef } from '@mui/x-data-grid'
import moment from 'moment'
import { CustomButton } from "../components/common/CustomButton"
import { ProductActions } from '../components/common/ProductActions'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useGetProducts } from '../features/dataManager/hooks/useGetProducts'
import { selectProduct } from '../features/dataManager/states/productState/productState'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Producto',
    width: 150,
    editable: true,
  },
  {
    field: 'productType',
    headerName: 'Categoria',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Precio',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Descripcion',
    width: 160,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Fecha',
    width: 120,
    editable: false,
    renderCell: params =>moment(params.row.createdAt).format('YYYY-MM-DD')
  },
  {
    field: 'photo',
    headerName: 'Foto',
    width: 70,
    editable: false,
    sortable: false,
    filterable: false,
    renderCell: (params) => <Avatar  src={params.row.photo} variant="rounded" />
  },
  {
    field: 'actions',
    headerName: 'Acciones',
    width: 150,
    type:'actions',
    renderCell: (params) => (
      <ProductActions {...{ params }} />
    )
  },
];


const AllProducts = () => {
  const dispatch = useAppDispatch()
  const [pageSize, setPageSize] = useState(5)
  const product = useAppSelector(selectProduct)
  console.log(product.products.products)
return (
    <Box mt={8} mb={16}>
      <Stack direction="row"
      sx={{
        gap: {xs:2, md: 52, lg: 95, xl: 115},
        mt: { md:2 , lg: 4},
        ml: {xs:-2, lg: 1},
      }}
      justifyContent="space-between"
      alignItems="center">
          <Typography fontSize={25} fontWeight={700} color="#11142d">
            Productos
          </Typography>
          {/* <Link href="/CreateProducts"> */}
          <CustomButton 
            title="Agregar Producto"
            backgroundColor="#475be8"
            color="#fcfcfc"
            icon={<Add />}
            handleClick={() => dispatch(useGetProducts())}
          />
          {/* </Link> */}
      </Stack>
      
      <Box bgcolor="#fcfcfc" sx={{ height: 400, width: '100%', mt: 4, flex: 1}}>
        <DataGrid
          rows={product.products.products || []}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 20]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getRowSpacing={params=> ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
        />
      </Box>
    </Box>
  )
}

export default AllProducts