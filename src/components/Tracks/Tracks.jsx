import * as React from 'react';
import './Tracks.css'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {callApi} from './tracksSlice'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Grid from '@mui/material/Grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Tracks(){
    const dispatch = useDispatch()
    const data = useSelector(state=>state)
    useEffect(()=>{
        dispatch(callApi())
    }, [])


 


    return(
        <>
        <div className='main-container'>
     
      {
      data.map(song=>(
          
          <>
          <p>{song.title}</p>
             </>
      )
      )}
      </div>
        </>
        
    )
}

export default Tracks