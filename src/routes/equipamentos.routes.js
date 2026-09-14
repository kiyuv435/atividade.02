import { Router } from "express";
import { equipamentosService } from "../services/equipamentos.services.js";
export const equipamentosRouter = Router()

equipamentosRouter.get("/", async (req, res) => {
    try{
        const equipamentos = await equipamentosService.listarEquipamentos()
        res.json(equipamentos);
    } catch (error){
        console.error(error);
    }
})
