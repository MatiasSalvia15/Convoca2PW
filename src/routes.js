import {Router} from "express"
import {helloWorld} from './controllers/playerController.js'
const router = Router();

router.get('/', helloWorld)

export {router}
