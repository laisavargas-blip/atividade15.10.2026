import { Router } from 'express';
import { veiculoService } from '../services/veiculo.service.js';

const veiculosRoutes = Router()

veiculosRoutes.get("/", async (req, res) => {
    const veiculos = await veiculoService.listarTodos();
    return res.json(veiculos);
});

veiculosRoutes.post("/", async (req, res) => {
    console.log(req.body);
    
    const veiculos = await veiculoService.criar(req.body);
    return res.status(201).json(veiculos)
});
export default veiculosRoutes
