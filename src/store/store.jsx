import {configureStore} from '@reduxjs/toolkit'
import trackSlice from '../components/Tracks/tracksSlice'

const store =configureStore({
 reducer:{
     tracks: trackSlice.reducer,
 }
})

export default store