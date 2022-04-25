import logo from './logo.svg';
import './App.css';
import Tracks from './components/Tracks/Tracks';
import {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';


function App() {
  /* const [search, setSearch] =useState("") */
 
  
  return (
    <div className="App">
     {/*  <Search setSearch={setSearch}/> */}
      <Routes>     
        <Route path="/" element={<Tracks/>} />   
        <Route path="/page/:page" element={<Tracks/>} />
        
      </Routes>
      <Footer/>
    </div>
  );

  
}

export default App;
