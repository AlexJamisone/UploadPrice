import express from "express";
import { AddPage } from "../controllers/add-controller.js";
const route = express.Router()

route.get('/add', AddPage)

export default route
