import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import ContentComponent from './components/ContentComponent'
import { MapComponent1 } from './components/MapComponent1'
import { MapComponent2 } from './components/MapComponent2'
import { MapComponent3 } from './components/MapComponent3'
import { MapComponent4 } from './components/MapComponent4'
import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import { Navbar } from "./components/Navbar";
import { HomeComponent } from "./components/HomeComponent";
import { Route, Routes } from 'react-router-dom'
import { ErrorComponent } from './components/ErrorComponent'
import { Watch } from './components/Watch'
import { Sports } from './components/Sports'
import { PlaySports } from './components/PlaySports'

function App() {
  

  return (
  
      <div>
        <Navbar></Navbar>
        <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
        <Route path="/watch/:name" element={<Watch/>}></Route>
        <Route path="/*" element = {<ErrorComponent/>}></Route>
        <Route path="/sports" element={<Sports/>}></Route>
        <Route path='/play/:name' element={<PlaySports/>}></Route>
      </Routes>
      </div>
    
    
  )
}

export default App
