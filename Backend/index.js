import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import cardioRoutes from "./routes/cardiospecialist.js";
import arthoRoutes from "./routes/arthospecialist.js";
import brainRoutes from "./routes/brainspecialist.js";
import psychatristRoutes from "./routes/psychatrist.js";
import pulmonologistRoutes from "./routes/pulomonologist.js";
import skinRoutes from "./routes/skinSpecialist.js";
import userRoutes from "./routes/user.js";
import topDoctorsRoutes from "./routes/topdoctors.js";
import appointmentRoutes from "./routes/appointment.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import { requireToken } from "./config/requireToken.js";


const app = express();
// const cors = cors();
dotenv.config();
mongoose.set("strictQuery", false);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
    } catch (error) {
        throw error;   
    }};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected !");
});

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected !");
});

//middleware
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(cors());
app.use("/user",userRoutes);
app.use("/cardio",cardioRoutes);
app.use("/artho",arthoRoutes);
app.use("/brain",brainRoutes);
app.use("/psychatrist",psychatristRoutes);
app.use("/topdoctors",topDoctorsRoutes);
app.use("/pulmonologist",pulmonologistRoutes);
app.use("/skin",skinRoutes);
app.use("/appointment",appointmentRoutes);
app.use(notFound);
app.use(errorHandler);

app.get('/',requireToken,(req,res)=>{
    res.send("your email is"+ req.user.email)
})

app.listen(5000,()=>{
    connect(); 
    console.log("connected to backend!");
});