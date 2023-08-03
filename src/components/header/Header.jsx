import React from 'react'
import s from './Header.module.css'
import SearchInput from './searchInput/SearchInput'
import Notifications from './notifications/Notifications'
import HeaderMusic from './headerMusic/HeaderMusic'

const Header = () => {
  return (
    <header className={s.header}>
        <img className={s.img}
           src="https://logos-download.com/wp-content/uploads/2021/06/Vkontakte_Logo_2006.png"
           placeholder='изображение vk-logo' alt='vk icon'/>
           <SearchInput/>
           <Notifications/>
           <HeaderMusic/>
    </header>
  )
}

export default Header