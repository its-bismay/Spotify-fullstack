import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from 'react-router-dom';

import AddSong from './pages/AddSong';
import AddAlbum from './pages/AddAlbum';
import ListSongs from './pages/ListSongs';
import ListAlbum from './pages/ListAlbum';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

export const url = 'http://localhost:4000'

const App = () => {
  return (
    <div className='flex items-center min-h-screen'>
      <ToastContainer/>
      <Sidebar/>
      <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
        <Navbar></Navbar>
        <div className="pt-5 pl-5 sm:pt-12 sm:pl-12">
          <Routes>
            <Route path='/add/song' element={<AddSong/>} />
            <Route path='/add/album' element={<AddAlbum/>} />
            <Route path='/list/songs' element={<ListSongs/>} />
            <Route path='/list/albums' element={<ListAlbum/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
