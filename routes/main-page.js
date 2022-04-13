import express from 'express';

import { getMainPage } from '../controllers/main-page.js'

const router = express.Router();

router.get('/', getMainPage)

export default router;