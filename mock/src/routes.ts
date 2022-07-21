import { Router } from "express";
import { is_authenticated } from "./middleware";
import { getUsers, getUserById, setUser, deleteUser, updateUser } from "./service";



const router = Router();

router.get('/users', is_authenticated, getUsers)

router.get('/users/:id', is_authenticated, getUserById)

router.post('/users', is_authenticated, setUser)

router.put('/users/:id', is_authenticated, updateUser)

router.delete('/users/:id', is_authenticated, deleteUser)

export default router;
