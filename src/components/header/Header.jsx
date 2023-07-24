import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.img} src="https://logos-download.com/wp-content/uploads/2021/06/Vkontakte_Logo_2006.png"
        placeholder='изображение vk-logo' alt='vk icon' /> 
    </header>
  )
}

export default Header