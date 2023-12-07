import {Router} from "express"
import { obtenerTodos } from "./controllers/playerController.js";
const router = Router();

router.get('/jugadores', obtenerTodos)

export {router}
