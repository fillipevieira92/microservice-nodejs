import { Request, Response } from "express";
import { UserRepository } from "../config/db.repository";
import { validEmail, validName } from "../middleware/validFields";



const repository = new UserRepository();

export const getUsers = async (req: Request, res: Response) => {
  
  try {    
    const response = await repository.getAll()
    return res.status(200).json(response)

  } catch (e) {
    return res.status(500).json({message: "Internal Server Error"})      
  }   

}

export const getUserById = async(req: Request, res: Response) => {

  try {
    const id = parseInt(req.params.id)
    const response = await repository.getById(id)
    return res.status(200).json(response)

  } catch (e) {
    return res.status(500).json({message: "Internal Server Error"})      
  }   

}

export const setUser = async (req: Request, res: Response) => {
  
  try {      
    const {name, email} = req.body;
    if (await validName(name) && await validEmail(email)) {
      await repository.insert(name, email)
      return res.status(200).json({message:"User created successfully", user: {name:name, email:email}})

    } else return res.status(400).json({message: "Invalid Fields"})


  } catch (e) {
    return res.status(500).json({message: "Internal Server Error"})      
  }   
  
}

export const updateUser = async (req:Request, res:Response) => {
   
  try {
    const id = parseInt(req.params.id)
    const {name, email} = req.body;
    const response = await repository.update(id, name, email)
    if( response ){
      return res.status(200).json({message: `User id:${id} updated successfully`, user: {name:name, email:email}})
    }
    return res.status(404).json({message: "Not Found"})

  } catch (e) {
    return res.status(500).json({message: "Internal Server Error"})     
  }

}

export const deleteUser = async (req:Request, res:Response) => {

  try {
    const id = parseInt(req.params.id)
    const response = await repository.del(id)
    if ( response ) {
      return res.status(200).json({message: `User id:${id} deleted successfully.`})
    }
    return res.status(404).json({message: "Not Found"})

  } catch (e) {
    return res.status(500).json({message: "Internal Server Error"})     
  }

}
