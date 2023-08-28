// import db connection
import { connection } from "../db/db.js";

// ping controller
export const ping = async (req, res) => {
  const [result] = await connection.query('SELECT "pong" AS result');
  res.json(result);
}