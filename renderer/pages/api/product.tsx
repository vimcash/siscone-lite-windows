import type { NextApiHandler } from "next"
import { dateTimeFormat } from "../../utils"

const requestType = 'GET'
export const getConfig: NextApiHandler = 
  (req, res) => {
    if(req.method !== requestType)
    {
      res.status(405).send({ message: `Only ${requestType} requests allowed` })
      return
    }

    res.json([
      {product: 'Zanahoria' , category: 'Vegetal', desc: 'Prueba'},
      {product: 'Tomate' , category: 'Vegetal', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'}])
  }
export default getConfig