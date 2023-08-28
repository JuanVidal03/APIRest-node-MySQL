// import dependencies
import { Router } from "express";

// import controller
import { ping } from "../controllers/index.controller.js";


const router = Router();

router.get('/ping', ping)


export default router;