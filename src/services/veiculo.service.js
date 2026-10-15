import { pool } from '../config/db.js';


//isso busca veiculos no banco
class VeiculoService {
    async listarTodos() {
        const res = await pool.query('SELECT * FROM veiculos ORDER BY modelo');
        return res.rows;
    }

    //cadastrar novos veiculos no banco
    async criar({modelo, marca, ano, placa}) {
        const res = await pool.query(
            'INSERT INTO veiculos (modelo, marca, ano, placa) VALUES ($1, $2, $3, $4) RETURNING *',
            [modelo, marca, ano, placa]
        );
        return res.rows[0];
    }
}

export const veiculoService = new VeiculoService()