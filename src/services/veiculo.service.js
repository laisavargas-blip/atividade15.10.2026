import { pool } from '../config/db.js';


//isso busca veiculos no banco
class veiculos.api{
     async listarTodos() {
    const res = await pool.query('SELECT * FROM veiculos ORDER BY modelo');
    return res.rows;
  }
}
//cadastrar novos veiculos no banco
async criar({ placa, modelo, cor }) {
    const res = await pool.query(
      'INSERT INTO veiculos (placa, modelo, cor) VALUES ($1, $2, $3) RETURNING *',
      [placa, modelo, cor]
    );
    return res.rows[0];
  }
export default VeiculoService;
