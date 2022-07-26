import express from 'express'

import { addController } from "../controllers/add.js";

const router = express.Router()

router.get('/add', addController)

export default router