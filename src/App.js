import React, { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewsContent from './components/newsContent/NewsContent'
import FriendsList from './components/friendsList/FriendsList'
import MusicsList from './components/musicsList/MusicsList'
import PhotosList from './components/photosList/PhotosList'
import GroupsList from './components/groupsList/GroupsList'
import VideosList from './components/videosList/VideosList'
import axios from 'axios'
import MyProfile from './components/myProfile/MyProfile'
import Dialogs from './components/dialogs/Dialogs'
import Dialog from './components/dialogs/dialog/Dialog'



const App = () => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
            <Routes>
             <Route path="/myProfile" element={<MyProfile/>}/>
             <Route path="/newsContent" element={<NewsContent/>}/>
             <Route path="/friendsList" element={<FriendsList/>}/>
             <Route path="/groupsList" element={<GroupsList/>}/>
             <Route path="/musicsList" element={<MusicsList/>}/>
             <Route path='/photosList' element={<PhotosList/>}/>
             <Route path='/videosList' element={<VideosList/>}/>
             <Route path="/dialogs/" element={<Dialogs/>}/>
              <Route path='/dialogs/:id' element={<Dialog/>}/> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
