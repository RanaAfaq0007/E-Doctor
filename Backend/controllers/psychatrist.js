import Psychatrist from "../models/Psychatrist.js";

export const createPsychartrist = async(req,res)=>{
  
      const newPsychatrist = new Psychatrist(req.body);

      try {
        const savedPsychatrist = await newPsychatrist.save();
        res.status(200).json(savedPsychatrist);
      } catch (error) {
        res.status(500).json(error);
      }

}

export const updatePsychartrist = async (req, res) => {
  try {
    const updatedPsychatrist = await Psychatrist.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPsychatrist);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deletePsychartrist = async (req, res) => {
  try {
    await Psychatrist.findByIdAndDelete(req.params.id);
    res.status(200).json("Cardio Specialist has been deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getPsychartrist = async (req, res) => {
  try {
const allPsychatrist = await Psychatrist.find({});
    res.status(200).json(allPsychatrist);
  } catch (error) {
    res.status(500).json(error);
  }
};