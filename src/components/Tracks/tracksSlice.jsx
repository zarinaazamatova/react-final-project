import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


let defaultState = {activeWord : 0};
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
		'X-RapidAPI-Key': '235d1e4ce6mshd3fa7d924d782ecp165bbbjsnf7174d25906e'
	}
};
export const callApi = createAsyncThunk('api/music',async(obj,{state=defaultState, error})=>{
    try{
        const req = await fetch('https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100', options)
        const res = await req.json()
         console.log(res)
        return res.items
       
    }catch(error){
        console.log(error)
        return []
    }
})

const trackSlice = createSlice({
    name: "track",
    initialState:[],
    reducers:{ },
    extraReducers:{
        [callApi.pending]:(state, action)=>{
            return []
        },
        [callApi.fulfilled]:(state, action)=>{
            return action.payload
        },
        [callApi.rejected]:(state, action)=>{
            return []
        }

  }
    
})

export const actions = trackSlice.actions;
export default trackSlice;