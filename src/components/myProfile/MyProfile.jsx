import React from 'react'
import s from './MyProfile.module.css'
import ProfileInfo from '../profileInfo/ProfileInfo';
import Posts from './../Posts/Posts';

// как буд-то идеологически лучше убрать посты отсбюда раз они есть в новостях. Рановато для стены как у Дурова)

const MyProfile = () => {

  return (
    <div className={s.myProfile}>
      <ProfileInfo />
      <Posts/>
    </div>
  )
}

export default MyProfile