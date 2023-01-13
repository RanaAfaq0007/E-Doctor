import axios from "axios";

const baseUrl = "http://192.168.100.49:5000";

export const registerUser = async (data) => {
    try {
        return await axios.post(`${baseUrl}/user/`,data);
    } catch (error) {
        console.log("Error while registering the user api",error);
    }
};

export const getCardioSpecialists=async ()=>{
    try {
      return await axios.get(`${baseUrl}/cardio/getAll`);
    } catch (error) {
      console.log("error while calling the getUsers API",error);
    }
  } 
