import React from 'react'
import Progress from '../../UI/progress/Progress'

const ControlsVideo = ({
    classes, handlePlay, playing, handleValue,
    volume, loadedSeconds, playedSeconds, handleProgressTrack,
}) => {
    return (
        <div className={classes.videoHalf}>
            <div className={classes.interactions}>
                <div
                    className={classes.videoBtn}
                    onClick={handlePlay}
                >
                    {!playing ? 'играть' : 'пауза'}
                </div>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    onChange={handleValue}
                    value={volume}
                />
            </div>
            <Progress
                playedSeconds={playedSeconds}
                loadedSeconds={loadedSeconds}
                value={playedSeconds}
                classes={classes}
                funcChange={handleProgressTrack}

            />

        </div>
    )
}

export default ControlsVideo