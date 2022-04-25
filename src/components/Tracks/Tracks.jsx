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
     
        <Grid  container spacing={5} c>
      {
      data.tracks.map(song=>(
          
          <>
             
  <Grid item xs={3}>
       <Card sx={{ maxWidth: 345 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={song.track.artists[0].name}
      />
      <CardMedia
        component="img"
        height="220"
        image={song.track.album.images[0].url}
        alt="Paella dish"
         />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {song.track.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
    {/*     <IconButton aria-label="add to favorites" >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
         
          <ShareIcon />
        </IconButton> */}
     
        
      </CardActions>
      </Card>
    </Grid>
      
 </>
   ))
      }
    
      </Grid>
      </div>
        </>
        
    )
}

export default Tracks