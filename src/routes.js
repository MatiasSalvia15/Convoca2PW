import {Router} from "express"
import { CrearJugador, obtenerTodos } from "./controllers/playerController.js";
const router = Router();

router.get('/jugadores', obtenerTodos)
router.post('/jugador', CrearJugador)

export {router}
