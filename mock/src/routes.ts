import { Router } from "express";
import { is_authenticated } from "./middleware";



const router = Router();

router.get('/users', is_authenticated, (req, res) => {

})

router.get('/users/:id', is_authenticated, (req, res) => {

})

router.post('/users', is_authenticated, (req, res) => {

})

router.put('/users/:id', is_authenticated, (req, res) => {

})

router.delete('/users/:id', is_authenticated, (req, res) => {

})

export default router;
