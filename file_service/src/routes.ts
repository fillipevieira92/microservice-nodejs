import { is_authenticated } from "./middleware/auth";
import { validFile } from "./service";
import { Router } from "express";
import multer from "multer";

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const router = Router();

router.post('/upload', is_authenticated, upload.single('file'), validFile)

export default router;
