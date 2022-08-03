import React, {useState}from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import VideoPlayer from '../components/VideoPlayer';
import Playlist from '../components/Playlist';


function Home() {
  return (
    <>  
        <Navbar page='Your Playlists' />
        <Sidebar />
        
        {/* <SearchBar placeholder="Quick Search..."/> */}
        {/* <VideoPlayer /> */}
        <Playlist header='Most Played' />
        <Playlist header='All Playlists'/>




    </>
  )
}

export default Home