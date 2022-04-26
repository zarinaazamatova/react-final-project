import logo from './logo.svg';
import './App.css';
import Tracks from './components/Tracks/Tracks';
import {useEffect, useState} from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Playlist from './components/Playlist/Playlist';
import Search from './components/SearchField/SearchField';
import Header from './components/Header/Header'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function App() {
  const [search, setSearch] =useState("")
  const [favorite, setFavorite] =useState([])
  const [pageNow,setPageNow] = useState(1)

  const handleToHome =()=>{
        setSearch('')
        setPageNow(1)
  }

  /*Playlist */
  const addToPlaylist = (song) => {
    const exist = favorite.find((x) => x.track.id === song.track.id);
    if (!exist) {
      
      setFavorite([...favorite, song]);
      
  };
  }
  return (
    <>
     <Header/>
    <div className="App">
     
       <div className="menu">
      <Link to="/"><HomeOutlinedIcon sx={{ fontSize: 40 }}className="home-icon"/><button onClick={()=>{handleToHome()}} className='home'>Home Page</button></Link>
          
      <SearchIcon className="search-icon"  sx={{ fontSize: 40 }}/><Search className="search" search={search} setSearch={setSearch}/>
      <Link to="/page/Playlist"><FavoriteBorderIcon sx={{ fontSize: 40 }}className="heart-icon"/> <button  className='playlist'>My Playlist</button></Link>
     
          </div>
          <div className="cards">
      <Routes>     
        <Route path="/" element={<Tracks search={search} setFavorite={setFavorite} favorite={favorite} setPageNow={setPageNow} pageNow={pageNow} addToPlaylist={addToPlaylist}/>} />   
        <Route path="/page/:page" element={<Tracks search={search} setFavorite={setFavorite} favorite={favorite} setPageNow={setPageNow} pageNow={pageNow} addToPlaylist={addToPlaylist}/>} />
        <Route path="/page/Playlist" element={<Playlist favorite={favorite}/>} />
      </Routes>
      </div>
      
    </div>
    <Footer/>
    </>
  );

  
}

export default App;
