
import express from 'express';
import veiculosRoutes from './routes/veiculo.Routes.js';

const app = express();

app.use(express.json());
app.use('/api', veiculosRoutes);

app.listen(3000, () => {
  console.log('Servidor da lais rodando');
});
