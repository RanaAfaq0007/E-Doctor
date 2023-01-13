import  express  from "express";
import { createSkin, deleteSkin, getSkin, updateSkin } from "../controllers/skinspecialist.js";

const router = express.Router();

//Create Cardio Specialist

//Create
router.post("/",createSkin);
//get All 
router.get("/getAll",getSkin);
//Update
router.put('/update/:id',updateSkin);
//Delete
router.delete("/delete/:id",deleteSkin);

export default router