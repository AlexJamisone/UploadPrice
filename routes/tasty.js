import express from 'express';
import { tastyData } from '../controllers/tasty.js'

const router = express.Router();

router.get('/', tastyData);

export default router;
