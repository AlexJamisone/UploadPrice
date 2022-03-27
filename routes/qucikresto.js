import express from 'express';
import { qucikData } from '../controllers/qucikresto.js'

const router = express.Router();


router.get('/', qucikData);


export default router;




