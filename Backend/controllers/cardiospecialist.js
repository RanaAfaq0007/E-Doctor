import CardioSpecialist from "../models/CardioSpecialist.js";

export const createCardioSpecialist = async(req,res)=>{
  
      const newCardioSpecialist = new CardioSpecialist(req.body);

      try {
        const savedCardioSpecialist = await newCardioSpecialist.save();
        res.status(200).json(savedCardioSpecialist);
      } catch (error) {
        res.status(500).json(error);
      }

}

export const updateCardioSpecialist = async (req, res) => {
  try {
    const updatedCardioSpecialist = await CardioSpecialist.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCardioSpecialist);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteCardioSpecialist = async (req, res, next) => {
  try {
    await CardioSpecialist.findByIdAndDelete(req.params.id);
    res.status(200).json("Cardio Specialist has been deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getCardioSpecialists = async (req, res) => {
  try {
    const allCardio = await CardioSpecialist.find({});
    res.status(200).json(allCardio);
  } catch (error) {
    res.status(500).json(error);
  }
};