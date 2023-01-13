import  express  from "express";
import { createCardioSpecialist, deleteCardioSpecialist, getCardioSpecialists, updateCardioSpecialist } from "../controllers/cardiospecialist.js";

const router = express.Router();

//Create Cardio Specialist

//Create
router.post("/",createCardioSpecialist);
//get All 
router.get("/getAll",getCardioSpecialists);
//Update
router.put('/update/:id',updateCardioSpecialist);
//Delete
router.delete("/deletecardio/:id",deleteCardioSpecialist);

export default router