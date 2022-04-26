import './Header.css'
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Header(){


    return(
     <div className='header'>
       
       <PersonOutlineIcon sx={{ fontSize: 40 }} className='user'/>
          <Avatar className="avatar" sx={{ bgcolor: red[600] }} aria-label="music">
            K
          </Avatar>
      </div>
    )
}

export default Header