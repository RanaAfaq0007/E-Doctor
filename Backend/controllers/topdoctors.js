import TopDoctors from "../models/TopDoctors.js";

export const createTopDoctor = async(req,res)=>{
  
      const newtopDoctor = new TopDoctors(req.body);

      try {
        const savedtopdoctor = await newtopDoctor.save();
        res.status(200).json(savedtopdoctor);
      } catch (error) {
        res.status(500).json(error);
      }

}

export const updateTopDoctor = async (req, res) => {
  try {
    const updatedtopDoctor = await TopDoctors.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedtopDoctor);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deletetopDoctor = async (req, res) => {
  try {
    await TopDoctors.findByIdAndDelete(req.params.id);
    res.status(200).json(" Top Doctor has been deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getTopDoctor = async (req, res) => {
  try {
const alltopDoctors = await TopDoctors.find({});
    res.status(200).json(alltopDoctors);
  } catch (error) {
    res.status(500).json(error);
  }
};