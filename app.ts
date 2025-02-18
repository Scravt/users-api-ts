import dotenv from 'dotenv';
import Server from './models/server';
import db from './conn_db/db';
import {createTables} from'./conn_db/createTables';

dotenv.config();

const server = new Server();

db
createTables();


server.listen();