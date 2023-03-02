import {Router} from "express";
import * as controller from '../controller/controller.js'
const router=Router();

/** Questios Route API*/
router.route('/questions')
    .get(controller.getQuestion)
    .post(controller.insertQuestion)
    .delete(controller.deleteQuestion)
/** Result Route API */
router.route('/result')
    .get(controller.getResult)
    .post(controller.storeResult)
    .delete(controller.deleteResult)

export default router; 