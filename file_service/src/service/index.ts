import { json, Request, Response } from "express";
import { validName, validEmail } from "../middleware/validFields";
const axios = require('axios');


export async function validFile( req: Request, res: Response ) {
  
  if (req.file) {
        
    if (req.file.mimetype == "text/csv") {

      const file = req.file.buffer.toString().split('\n')

      if (file[0] != '') {

        var users = []
        for (let row in file) {

          if (file[row] != '') {

            const user = file[row].replace(';', ',').split(',')
            if ( user.length > 2 || !validName(user[0]) || !validEmail(user[1]) ) {
              return res.status(400).json({message: "File with bad formatting"})
            }
            
            users.push(user)  
          }

        }
        uploadUsers(users, res)
        
      } else return res.status(400).json({message: "Empty File"})

    } else return res.status(400).json({message: "Only CSV Files"})

  } else return res.status(400).json({message: "Bad Request"})
  
}

async function uploadUsers(users: string[][], res: Response) {

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT GPTW'
  }

  for (let row in users) {
    let data = {
      name: users[row][0],
      email: users[row][1].replace(' ', '')
    }
    await axios.post("http://mock:3000/api/v1/users", data,  {headers: headers})
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send())
  }

}
