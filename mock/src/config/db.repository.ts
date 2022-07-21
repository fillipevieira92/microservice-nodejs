import { pool } from "./db.config" 

export class UserRepository {
  
  public insert = async (name: String, email: String) => {
    return await pool.query("INSERT INTO users(name, email) VALUES($1, $2)",[name,email])  
  }
  
  public del = async (id:Number) => {
    const response = await pool.query("DELETE FROM users WHERE id = $1", [id])
    return response.rowCount > 0 ? true:false
  }
  
  public getAll = async () => {
    return (await pool.query("SELECT * FROM users")).rows
  }
  
  public getById = async (id:Number) => {
    return (await pool.query("SELECT * FROM users WHERE id = $1",[id])).rows
  }
  
  public update = async (id:Number, name:String, email:String) => {
    const response = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [name, email, id])
    return response.rowCount > 0 ? true:false
  }
}