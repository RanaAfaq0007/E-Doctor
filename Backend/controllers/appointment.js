import Appointment from "../models/Appointment.js";


export const createAppointment = async (req,res)=>{
    const newAppointment = new Appointment(req.body);

    try{
        const savedNewAppointment = await newAppointment.save();
        res.status(200).json(savedNewAppointment);
    } catch (error) {
         res.status(500).json(error);
    }
}

export const getAllTheAppointments = async (req,res) => {
   
   
        try {
            let data = await Appointment.find(
                {
                    "$or":[
                        {"patientsId":{$regex:req.params.key}}
                    ]
                }
            );
            res.status(200).send(data);
        } catch (error) {
            res.status(401).send(error);
        }
  
    // let data = await Appointment.find()
      
    //  res.json(data);
  
    // const query = req.query.q;
  
    // try {
    //     const appointmentReturn =  await Appointment.find({patientsId:{$regex:new RegExp(query),
    //         $options:'i'}});

    //         res.send(appointmentReturn);
    // } catch (error) {
    //     res.send(error)
    // }
    // await Appointment.find({patientsId:{$regex:new RegExp(query),
    //     $options:'i'}},
    //     (err,data) =>{
    //         if(err){
    //             res.status(401).send(err);
    //         } else {
    //             res.status(201).json(data);
    //         }
    //     }
        
        // )

}
