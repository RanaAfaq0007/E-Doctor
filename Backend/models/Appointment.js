import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  patientsId:{
    type:String,
    required:false,
  },
  session: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
  doctorName:{
    type:String,
    required:false
  },
  specialist:{
    type:String,
    required:false,
},
  address: {
    type: String,
    required: false,
  },
  patientsAge: {
    type: String,
    required: false,
  },
  patientsDesc: {
    type:String,
    required:false,
  },
});

export default mongoose.model("Appointment", AppointmentSchema)