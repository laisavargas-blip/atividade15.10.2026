import express from 'express';
import veiculosRoutes from './routes/veiculo.routes.js';

const app = express();

app.use(express.json());
app.use('/veiculos', veiculosRoutes);

app.listen(3000, () => {
console.log(`Servidor da lais rodando em http://localhost:3000`);
});
