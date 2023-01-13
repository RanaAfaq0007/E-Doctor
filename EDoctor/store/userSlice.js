import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        userData(state,action){
            state.push(action.payload);

        },
        deleteUserData(state,action){
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const {userData,deleteUserData} = userSlice.actions;
export default userSlice.reducer;