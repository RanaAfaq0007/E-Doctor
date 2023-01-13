import  express  from "express";
import { createTopDoctor, deletetopDoctor, getTopDoctor, updateTopDoctor } from "../controllers/topdoctors.js";

const router = express.Router();

//Create Cardio Specialist

//Create
router.post("/",createTopDoctor);
//get All 
router.get("/getAll",getTopDoctor);
//Update
router.put('/update/:id',updateTopDoctor);
//Delete
router.delete("/delete/:id",deletetopDoctor);

export default router