import express from "express";

import { createBrainSpecialist, deleteBrainSpecialist, getBrainSpecialists, updateBrainSpecialist } from "../controllers/brainspecialist.js";

const router = express.Router();

//Create Cardio Specialist

//Create
router.post("/",createBrainSpecialist);
//get All 
router.get("/getAll",getBrainSpecialists);
//Update
router.put('/update/:id',updateBrainSpecialist);
//Delete
router.delete("/delete/:id",deleteBrainSpecialist);

export default router