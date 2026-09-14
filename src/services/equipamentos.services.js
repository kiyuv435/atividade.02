import { pool } from "../database/db.js"

class EquipamentosService {
    async listarEquipamentos(){
        const res = await pool.query("SELECT * FROM equipamentos")
        return res.rows
    }
}

export const equipamentosService = new EquipamentosService()