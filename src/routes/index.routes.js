// import dependencies
import { Router } from "express";

// import db connection
import { connection } from "../db/db.js";


const router = Router();

router.get('/ping', async (req, res) => {

  const [result] = await connection.query('SELECT "pong" AS result');
  res.json(result);

})


export default router;