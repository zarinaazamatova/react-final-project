import {TextField, Grid, FormControl, Box, Input} from '@mui/material'
import { debounce } from 'lodash'
import './SeacrhField.css'

function Search({setSearch, search}){


    
    const handlerWithDebounce = debounce((value)=>{
        setSearch(value)
        console.log(value, 'value')
    }, 500 )

    
    return(
     
       <Input type ="text" value={search} className='field' placeholder='Search artist...' onChange = {(e)=>handlerWithDebounce(e.target.value)} />
      
    )
}

export default Search