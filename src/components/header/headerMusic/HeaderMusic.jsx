import React from 'react'
import S from './HeaderMusic.module.css'
import {IoMusicalNotesOutline} from 'react-icons/io5'
import MusicsList from '../../musicsList/MusicsList'
import { useState } from 'react'
const HeaderMusic = () => {

    const [showList, setShowList] = useState(false);

    const handleClick = () => {
        setShowList(!showList);
    }

    const handleOutsideClick = () => {
        setShowList(false);
    };

  return (
    <div className={S.music}>
        <IoMusicalNotesOutline 
            className={S.musicIcon}
            onClick={handleClick}
        />
        {showList && (
            <div className={S.popup}>
                <MusicsList/>
            </div>
        )}
    </div>
  )
}

export default HeaderMusic