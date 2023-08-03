import React from 'react'
import S from './Notifications.module.css'
import {IoIosNotificationsOutline} from 'react-icons/io'


const Notifications = () => {
  return (
    <div className={S.notifications}>
        <IoIosNotificationsOutline className={S.notificatiosIcon}/>
    </div>
  )
}

export default Notifications