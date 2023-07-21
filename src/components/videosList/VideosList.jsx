import React from 'react'
import ReactPlayer from 'react-player'
import ControlsVideo from './controlsVideo/ControlsVideo'
import s from './VideosList.module.css'
import { useState } from 'react'
import { useRef } from 'react'

const VideosList = () => {

    const videos = {
        id: 1, url: '/wednsday.mp4',
        id: 2, url: '/videoTexts.mp4',
        id: 3, url: '/avengers.mp4'
    }

    const [state, setState] = useState({
        // playing: false,
        // volume: 0.5,
        loadedSeconds: 1,
        playedSeconds: 0,
        videos,
    });


    const [playing, setPlaying] = useState(false)
    const [currentVideo, setCurrentVideo] = useState(videos[0])
    const [volume, setVolume] = useState(0.5);

    const {
        // playing,
        // volume,
        loadedSeconds,
        playedSeconds
    } = state
    const videoRef = useRef()
    const handlePlay = () => {
        // setPlaying({...state, playing:!state.playing})
        setPlaying(!playing)
    }

    const handleValue = (e) => {
        // setState({...state, volume: Number(e.target.value)})
        setVolume(Number(e.target.value))
    }

    // const handleProgress = (e) => {
    //     setState({...state, ...e})
    // }

    const handleProgress = (e) => {
        setState({...state, ...e})
    }

    const handleProgressTrack = (e) => {
        videoRef.current.seekTo(Number(e))
    }

  return (
    <>
    <div className={s.video_wrapper}>
        <ReactPlayer
            url='/avengers.mp4'
            playing={playing}
            controls={false}
            width='100%'
            height='auto'
            volume={volume}
            ref={videoRef}
            onProgress={handleProgress}
        />
        <ControlsVideo
            classes={s}
            handlePlay={handlePlay}
            playing={playing}
            volume={volume}
            handleValue={handleValue}
            loadedSeconds={loadedSeconds}
            playedSeconds={playedSeconds}
            handleProgressTrack={handleProgressTrack }
        />
    </div>
    </>
  )
}

export default VideosList