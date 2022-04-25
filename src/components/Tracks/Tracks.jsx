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
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Search from '../SearchField/SearchField';

const items = 9; //количество элементов на странице

function Tracks(){
  const [search, setSearch] =useState("")
    const dispatch = useDispatch()
    const data = useSelector(state=>state)
    console.log(data)
    useEffect(()=>{
        dispatch(callApi())
    }, [])

    useEffect(()=>{
          setPageNow(1);
      },[search])
  
  
  const searchedList = data.tracks.filter((item) =>
  item.track.artists[0].name.toLowerCase().includes(search.toLowerCase())
  );


    console.log(searchedList,'filter')
    console.log(search,'search')
    
      /* Pagination */
  const [pageNow,setPageNow] = useState(1)
  const howNamyElements  = 8
  const [howManyPages,setHowManyPages] = useState(2)
  const start = pageNow === 1 ? 1 : pageNow * howNamyElements
  const end = start + howNamyElements
  const showElements = searchedList.slice(start,end)


    const nextPage =()=>{
    if(pageNow < searchedList.length/howNamyElements){
      setPageNow(pageNow + 1)
    }
  }
    const prevPage =()=>{
     if (pageNow >= 2){
      setPageNow(pageNow - 1)
    }else if(pageNow < 1){
      setPageNow(1)
    }

  }




    return(
        <>
        <div className='main-container'>
            
        <div className="menu">
    
      <Search setSearch={setSearch}/>
      <div className='favorite'>
        
      </div>
          </div>
          <div className="cards">
             <div className='pagination'>
      <Link to={`/page/${pageNow - 1}`}><ArrowBackIosNewIcon onClick={prevPage} baseClassName="fas" className="fa-light fa-circle-chevron-right" /></Link>
      <Link className="curr_page" to={`/page/${pageNow}`}>{pageNow}</Link>
      <Link to={`/page/${pageNow + 1}`}><ArrowForwardIosIcon onClick={nextPage} baseClassName="fas" className="fa-light fa-circle-chevron-right" />
        </Link>
        </div>
        <Grid  container spacing={5} c>
      {
      showElements.map(song=>(
          
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
        
     
        
      </CardActions>
      </Card>
    </Grid>
      
 </>
   ))
      }
    
      </Grid>
      </div>
       </div>
        </>
        
    )
}

export default Tracks