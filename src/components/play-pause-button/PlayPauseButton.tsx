import React from 'react'
import { TouchableOpacity } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/Feather'

import { AppColors } from '@theme'

const playTrack = async () => {
  try {
    const state = await TrackPlayer.getPlaybackState()
    if (state.state === State.Playing) {
      await TrackPlayer.pause()
    } else await TrackPlayer.play()

    const progress = await TrackPlayer.getProgress()
  } catch (err) {
    console.error(err)
  }
}
const PlayPauseButton = () => {
  const playbackState = usePlaybackState()
  return (
    <TouchableOpacity onPress={playTrack}>
      <Icon
        name={playbackState.state === State.Playing ? 'pause' : 'play'}
        size={50}
        color={AppColors.tertiary}
      />
    </TouchableOpacity>
  )
}

export default PlayPauseButton
