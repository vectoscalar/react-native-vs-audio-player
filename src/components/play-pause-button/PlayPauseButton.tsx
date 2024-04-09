import React from 'react'
import { TouchableOpacity } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/Feather'

import { AppColors } from '@theme'

async function playTrack() {
  try {
    const state = await TrackPlayer.getPlaybackState()
    if (state.state === State.Playing) {
      TrackPlayer.pause()
    } else TrackPlayer.play()

    const progress = await TrackPlayer.getProgress()
    console.log(`${progress.duration - progress.position} seconds left.`)
  } catch (err) {
    console.error(err)
  }
}
const PlayPauseButton = () => {
  const state = usePlaybackState()
  return (
    <TouchableOpacity onPress={playTrack}>
      <Icon
        name={state.state === State.Playing ? 'pause' : 'play'}
        size={50}
        color={AppColors.tertiary}
      />
    </TouchableOpacity>
  )
}

export default PlayPauseButton
