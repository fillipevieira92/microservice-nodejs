import { Request, Response } from "express";
import { UserRepository } from "../config/db.repository";



const repository = new UserRepository();

export const getUsers = async (req: Request, res: Response) => {
  
  try {    
    const response = await repository.getAll()
    return res.status(200).json(response)

  } catch (e) {
    return res.status(500).json({message: "Internal error"})      
  }   

}

export const getUserById = async(req: Request, res: Response) => {

  try {
    const id = parseInt(req.params.id)
    const response = await repository.getById(id)
    return res.status(200).json(response)

  } catch (e) {
    return res.status(500).json({message: "Internal error"})      
  }   

}

export const setUser = async (req: Request, res: Response) => {
  
  try {      
    const {name, email} = req.body;
    await repository.insert(name, email)
    return res.status(200).json({message:"User created", user: {name:name, email:email}})

  } catch (e) {
    return res.status(500).json({message: "Internal error"})      
  }   
  
}

export const updateUser = async (req:Request, res:Response) => {

   
  try {
    const id = parseInt(req.params.id)
    const {name, email} = req.body;
    await repository.update(id, name, email)
    
    return res.status(200).json({message: `User id = ${id} updated.`, user: {name:name, email:email}})

  } catch (e) {
    return res.status(500).json({message: "Internal error"})     
  }

}

export const deleteUser = async (req:Request, res:Response) => {

  try {
    const id = parseInt(req.params.id)
    await repository.del(id)
    return res.status(200).json({message: `User id = ${id} deleted.`})

  } catch (e) {
    return res.status(500).json({message: "Internal error"})     
  }

}
