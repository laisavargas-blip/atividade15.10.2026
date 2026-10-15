import { Router } from 'express';
import veiculoService from '../services/veiculo.service.js';
import { Result } from 'pg';

const veiculosRoutes = express.Router()

veiculosRoutes.get("/", async(resizeBy, req) =>
{
   const veiculos = await veiculoService.getAll();
   return res.json(veiculos);
});

veiculosRoutes.post("/",async(res,req) =>{
   const veiculos = await veiculoService.create(req.json);
   return res.status(201).json(veiculos)
});
export default veiculosRoutes
