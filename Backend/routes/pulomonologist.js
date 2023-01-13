import  express  from "express";
import { createPulmonologist, deletePulmonologist, getPulmonologist, updatePulmonologist } from "../controllers/pulmonologist.js";

const router = express.Router();

//Create Cardio Specialist

//Create
router.post("/",createPulmonologist);
//get All 
router.get("/getAll",getPulmonologist);
//Update
router.put('/update/:id',updatePulmonologist);
//Delete
router.delete("/delete/:id",deletePulmonologist);

export default router