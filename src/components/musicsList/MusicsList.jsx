import React, { useEffect, useRef, useState } from 'react';
import s from './MusicsList.module.css';
import ControlsAudio from './controlsAudio/ControlsAudio';


const MusicsList = () => {

  const musics = [
    { title: 'Martin Garrix & Dua Lipa', path: '/Martin Garrix & Dua Lipa - Scared To Be Lonely.mp3' },
    { title: 'David Getta', path: '/David.mp3' },
    { title: 'Martin Garrix - Animals', path: '/Animals.mp3' }
  ]

  const [songs, setSongs] = useState(musics)
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(musics[0])
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioElem = useRef(null);

  console.log(audioElem.current)
  const audioURL = '/Martin Garrix & Dua Lipa - Scared To Be Lonely.mp3'

  useEffect(() => {

    if (isPlaying) {
      audioElem.current.play()
    } else {
      audioElem.current.pause()
    }
  }, [isPlaying])

  const onPlaying = () => {
    const duration = audioElem?.current?.duration;
    const ct = audioElem.current.currentTime
    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })
  }
  console.log(audioElem)

  return (
    <div className={s.musicsList}>
      <audio
        src={currentSong.path}
        ref={audioElem}
        onTimeUpdate={onPlaying}
        tabIndex='0'
      />
      <ControlsAudio
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  )
}

export default MusicsList