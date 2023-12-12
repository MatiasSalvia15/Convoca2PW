import {Router} from "express"
import { CrearJugador, obtenerTodos, obtenerJugadorPorId, eliminarJugador } from "./controllers/playerController.js";
const router = Router();

router.get('/jugadores', obtenerTodos)
router.post('/jugador', CrearJugador)
router.get('/jugador/:id', obtenerJugadorPorId)
router.delete('/jugador/:id', eliminarJugador)

export {router}
