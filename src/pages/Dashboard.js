import React, {useState}from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import VideoPlayer from '../components/VideoPlayer';
import Playlist from '../components/Playlist';

function Home() {
    return (
      <>  
          <Navbar page='User Profile' />
          <Sidebar />
          
          {/* <SearchBar placeholder="Quick Search..."/> */}
          {/* <VideoPlayer /> */}
          
  
  
  
  
      </>
    )
  }
  
  export default Home