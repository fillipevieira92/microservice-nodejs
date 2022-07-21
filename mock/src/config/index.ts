import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host:'db',
  password: 'postgres',
  database: 'gptw',
  port: 5432
})