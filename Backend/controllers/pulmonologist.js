import Pulmonologist from "../models/Pulmonologist.js";

export const createPulmonologist = async(req,res)=>{
  
      const newPulmonologist = new Pulmonologist(req.body);

      try {
        const savedPulmonologist = await newPulmonologist.save();
        res.status(200).json(savedPulmonologist);
      } catch (error) {
        res.status(500).json(error);
      }

}

export const updatePulmonologist = async (req, res) => {
  try {
    const updatedPulmonologist = await Pulmonologist.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPulmonologist);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deletePulmonologist = async (req, res) => {
  try {
    await Pulmonologist.findByIdAndDelete(req.params.id);
    res.status(200).json("Cardio Specialist has been deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getPulmonologist = async (req, res) => {
  try {
    const allPulmonologist = await Pulmonologist.find({});
    res.status(200).json(allPulmonologist);
  } catch (error) {
    res.status(500).json(error);
  }
};