import mysql from 'mysql2';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection(function(err,conn){
    console.log('DB is conected')
// Connection is automatically released when query resolves
});


export default pool;

/*
import { createPool } from "promise-mysql";

import keys from "./keys";

export async function connect(){
    const connection = createPool(keys.database);
    console.log('db is connected');

    return connection;
}

*/

