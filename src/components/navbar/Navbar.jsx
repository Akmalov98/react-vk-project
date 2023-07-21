import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import MyProfile from './myProfile/MyProfile'
import News from './news/News'
import Messenger from './messenger/Messenger'
import Friends from './friends/Friends'
import Groups from './groups/Groups'
import Musics from './musics/Musics'
import Photos from './photos/Photos'
import Videos from './videos/Videos'

const Navbar = () => {
  return ( 
    <nav className={s.nav}>
            <NavLink to="/content">
                <MyProfile/>
            </NavLink>            
            <NavLink to="/newsContent">
                <News/>
            </NavLink>
            <NavLink to="/dialogs">
                <Messenger/>
            </NavLink>
            <NavLink to="/friendsList">
                <Friends/>
            </NavLink>
            <NavLink to="/groupsList">
                <Groups/>
            </NavLink>
            <NavLink to="/musicsList">
                <Musics/>
            </NavLink>
            <NavLink to="/photosList">
                <Photos/>
            </NavLink>
            <NavLink to="/videosList">
                <Videos/>
            </NavLink>
        </nav>
  )
}

export default Navbar