import React from 'react'
import s from './MyProfile.module.css'
import ProfileInfo from '../profileInfo/ProfileInfo';
import Posts from './../Posts/Posts';

const MyProfile = () => {

  return (
    <div className={s.myProfile}>
      <ProfileInfo />
      <Posts />
    </div>
  )
}

export default MyProfile