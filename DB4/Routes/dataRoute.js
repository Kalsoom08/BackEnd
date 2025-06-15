import express from 'express'
const router = express.Router()
import { addData , getData} from '../Controller/dataController.js';


router.post('/data', addData);
router.get('/data', getData)

export  default router