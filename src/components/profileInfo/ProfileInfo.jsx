import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.profileAvatar}>
                <img src="https://i02.appmifile.com/images/2017/09/05/33703ac3-e412-4efe-84e0-f11758e94ca6.jpg"
                    alt='profilePhoto' className={s.profileAvatarImg}
                />
            </div>
            <div className={s.profileInfoData}>
                <div className={s.profileDataItem}>
                    Proger Govnocodov
                </div>
                <div className={s.profileDataItem}>
                    qoutes
                </div>
                <div className={s.profileDataItem}>
                    Town
                </div>
                <div className={s.profileDataItem}>
                    language
                </div>
                <div className={s.profileDataItem}>
                    aducation
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo