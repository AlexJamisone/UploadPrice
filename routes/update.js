import express from 'express';

import { mergePrice } from '../controllers/merge.js';


const router = express.Router();

router.get('/', mergePrice)

export default router;