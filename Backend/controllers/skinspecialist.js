import Skin from "../models/skinSpecialist.js";

export const createSkin = async(req,res)=>{
  
      const newSkin = new Skin(req.body);

      try {
        const savedSkin = await newSkin.save();
        res.status(200).json(savedSkin);
      } catch (error) {
        res.status(500).json(error);
      }

}

export const updateSkin = async (req, res) => {
  try {
    const updatedSkin = await Skin.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSkin);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteSkin = async (req, res) => {
  try {
    await Skin.findByIdAndDelete(req.params.id);
    res.status(200).json("Skin Specialist has been deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getSkin = async (req, res) => {
  try {
const allSkin = await Skin.find({});
    res.status(200).json(allSkin);
  } catch (error) {
    res.status(500).json(error);
  }
};