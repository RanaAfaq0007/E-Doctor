import ArthoSpecialist from "../models/ArthoSpecialist.js";

export const createArthoSpecialist = async(req,res)=>{
  
      const newArthoSpecialist = new ArthoSpecialist(req.body);

      try {
        const savedArthoSpecialist = await newArthoSpecialist.save();
        res.status(200).json(savedArthoSpecialist);
      } catch (error) {
        res.status(500).json(error);
      }

}

export const updateArthoSpecialist = async (req, res) => {
  try {
    const updatedArthoSpecialist = await ArthoSpecialist.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedArthoSpecialist);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteArthoSpecialist = async (req, res) => {
  try {
    await ArthoSpecialist.findByIdAndDelete(req.params.id);
    res.status(200).json("Cardio Specialist has been deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getArthoSpecialists = async (req, res) => {
  try {
    const allArtho = await ArthoSpecialist.find({});
    res.status(200).json(allArtho);
  } catch (error) {
    res.status(500).json(error);
  }
};