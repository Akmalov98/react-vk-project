import React from 'react'

const Progress = ({
    loadedSeconds,
    playedSeconds,
    classes,
    funcChange
}) => {
  return (
    <div className={classes.videoProgress}>
        <input type='range'
            value={playedSeconds}
            min="0"
            max={loadedSeconds}
            step="1"
            className={classes.videoControlsProgress}
            onChange={(e) => funcChange(e.target.value)}
            style={{ background: `linear-gradient(to right, black
                ${playedSeconds/loadedSeconds*100}%, red
                ${playedSeconds/loadedSeconds*100}%)` }}
        />
    </div>
  )
}

export default Progress