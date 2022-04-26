
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
import './Playlist.css'

function Playlist({favorite}){

console.log(favorite, 'in playlist')
    return(
     
       <>
       <h1>My Playlist</h1>
     <Grid  container spacing={5} c>
      {
      favorite.map(song=>(
          
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
        key={song.track.id}
         />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {song.track.name}
        </Typography>
         <audio controls>
          <source src={song.track.preview_url} type="audio/mpeg"></source>
      </audio> 
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" /*  onClick={()=>setFavorite([...favorite, song])} */>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
         
          <ShareIcon />
        </IconButton>
     
        
      </CardActions>
      </Card>
    </Grid>
      
 </>
   ))
      }
    
      </Grid>
       </>
      
    )
}

export default Playlist