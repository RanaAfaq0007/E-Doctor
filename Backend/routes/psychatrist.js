import  express  from "express";
import { createPsychartrist, deletePsychartrist, getPsychartrist, updatePsychartrist } from "../controllers/psychatrist.js";

const router = express.Router();

//Create Cardio Specialist

//Create
router.post("/",createPsychartrist);
//get All 
router.get("/getAll",getPsychartrist);
//Update
router.put('/update/:id',updatePsychartrist);
//Delete
router.delete("/delete/:id",deletePsychartrist);

export default router