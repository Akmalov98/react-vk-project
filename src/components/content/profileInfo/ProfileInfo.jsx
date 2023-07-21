import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
        <div className={s.profileInfo}>
        <div className={s.profileAvatar}>
        <img src="https://i02.appmifile.com/images/2017/09/05/33703ac3-e412-4efe-84e0-f11758e94ca6.jpg"
            alt='profilePhoto' className={s.profileAvatarImg}   
        />
        </div>
        <div className={s.profileInfoDiv}>
            <div className={s.myNameDiv}>
                Proger Govnocodov
            </div>
            <div className={s.myQuoteDiv}>
                qoutes
            </div>
            <div className={s.myTownDiv}>
                Town
            </div>
            <div className={s.myContacts}>
                цитата
            </div>
            <div className={s.myLaguage}>
               language
            </div>
            <div className={s.myAducation}>
                aducation
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProfileInfo