import express from 'express'
import { equipamentosRouter } from './routes/equipamentos.routes.js'

const app = express()
const port = 3000

app.use(express.json())

app.use("/equipamentos", equipamentosRouter)

app.listen(port, () => {
    console.log(`app rodando em http://localhost:3000`);

})