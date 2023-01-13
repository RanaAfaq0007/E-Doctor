import BrainSpecialist from "../models/BrainSpecialist.js";

export const createBrainSpecialist = async(req,res)=>{
  
      const newBrainSpecialist = new BrainSpecialist(req.body);

      try {
        const savedBrainSpecialist = await newBrainSpecialist.save();
        res.status(200).json(savedBrainSpecialist);
      } catch (error) {
        res.status(500).json(error);
      }

}

export const updateBrainSpecialist = async (req, res) => {
  try {
    const updatedBrainSpecialist = await BrainSpecialist.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBrainSpecialist);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteBrainSpecialist = async (req, res) => {
  try {
    await BrainSpecialist.findByIdAndDelete(req.params.id);
    res.status(200).json("Cardio Specialist has been deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getBrainSpecialists = async (req, res) => {
  try {
    const allBrain = await BrainSpecialist.find({});
    res.status(200).json(allBrain);
  } catch (error) {
    res.status(500).json(error);
  }
};