import React, { useRef, useState } from 'react'
import { BsFillSkipStartCircleFill, BsFillVolumeMuteFill, BsFillVolumeDownFill, BsFillSkipEndCircleFill, BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillVolumeUpFill, BsFillVolumeOffFill } from 'react-icons/bs'
import s from './ControlsAudio.module.css'

const ControlsAudio = ({ audioElem,
    isPlaying, setIsPlaying, currentSong,
    setCurrentSong, songs }) => {

    const clickRef = useRef();

    const PlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX

        const divprogress = offset / width * 100;
        audioElem.current.currentTime = divprogress / 100 * currentSong.length;
    }

    const skipBack = () => {
        const index = songs.findIndex(s => s.title == currentSong.title);
        if (index == songs.length - 1) {
            setCurrentSong(songs[0])
        } else {
            setCurrentSong(songs[index + 1])
        }

        audioElem.current.currentTime = 0;
    }

    const skipNext = () => {
        const index = songs.findIndex(s => s.title == currentSong.title)
        if (index == songs.length - 1) {
            setCurrentSong(songs[0])
            audioElem.current.play()
        } else {
            setCurrentSong(songs[index + 1])

            audioElem.current.play()
        }

        audioElem.current.currentTime = 0;
    }

    const [volume, setVolume] = useState(0.5);
    const [mute, setMute] = useState(false);



    const checkWidthVolume = (event) => {
        const value = parseFloat(event.target.value)
        audioElem.current.volume = value

        if (value > 1) {
            value = 1
        } else if (value < 0) {
            value = 0
        }
        setVolume(value)
    }

    return (
        <div className={s.player_container}>
            <div className={s.title}>
                <p>{currentSong.title}</p>
            </div>
            <div className={s.navigation}>
                <div className={s.navigation_wrapper} onClick={checkWidth} ref={clickRef}>
                    <div className={s.seek_bar} style={{ width: `${currentSong.progress + '%'}` }}></div>
                </div>
            </div>

            <div className={s.player_icons}>
                <BsFillSkipStartCircleFill className={s.skip_back} onClick={skipBack} />
                {isPlaying
                    ? <BsFillPauseCircleFill onClick={PlayPause} />
                    : <BsFillPlayCircleFill onClick={PlayPause} />}

                <BsFillSkipEndCircleFill onClick={skipNext} />
                <BsFillVolumeUpFill />
                {mute ? <BsFillVolumeMuteFill onClick={() => setMute(!mute)} />
                    : volume <= 0.2 ? <BsFillVolumeOffFill onClick={() => setMute(!mute)} />
                        : volume <= 0.75 ? <BsFillVolumeDownFill onClick={() => setMute(!mute)} />
                            : <BsFillVolumeUpFill onClick={() => setMute(!mute)} />
                }
                <input type='range' min='0' max='1'
                    step='0.01' value={volume} onChange={checkWidthVolume} />
            </div>
        </div>
    )
}

export default ControlsAudio