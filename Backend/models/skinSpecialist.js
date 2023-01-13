import mongoose from "mongoose";

const SkinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  college: {
    type: String,
    required: false,
  },
  specialist:{
    type:String,
    required:false,
},
  address: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  workingHours: {
    type:String,
    required:false,
  },
  experience: {
    type: String,
    required: false,
  },
  patients: {
    type: String,
    required: false,
  },
appointments:{
    type:String,
    required:false,
}
});

export default mongoose.model("Skin", SkinSchema)