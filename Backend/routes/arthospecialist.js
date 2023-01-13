import express from "express";

import { createArthoSpecialist, deleteArthoSpecialist, getArthoSpecialists, updateArthoSpecialist } from "../controllers/arthospecialist.js";

const router = express.Router();

//Create Cardio Specialist

//Create
router.post("/add",createArthoSpecialist);
//get All 
router.get("/getAll",getArthoSpecialists);
//Update
router.put('/update/:id',updateArthoSpecialist);
//Delete
router.delete("/delete/:id",deleteArthoSpecialist);

export default router;