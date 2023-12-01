import { createSlice } from "@reduxjs/toolkit";


const cartsliceredux=createSlice({
    name:"Dataupdater",
    initialState:{
        data:{
            info:"",
            cart:1
        }
    },
    reducers:{
         updateinfo:(state,action)=>{
            state.data.info=action.payload
         },
         updatecart:(state,action)=>{
            state.data.cart=action.payload
         }

    },

})

export const  {updateinfo,updatecart} = cartsliceredux.actions;
export default cartsliceredux.reducer;