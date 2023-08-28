// import library
import { createPool } from 'mysql2/promise';

// creating the connection
export const connection = createPool({

  host:'localhost',
  user: 'root',
  password:'',
  port: 3306,
  database: 'companydb'

});