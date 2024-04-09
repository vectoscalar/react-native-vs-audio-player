/* eslint-disable eslint-comments/disable-enable-pair */

/* eslint-disable @typescript-eslint/no-misused-promises */

/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import TrackPlayer from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { AppColors, Spacing } from '@theme'

const VolumeControl = () => {
  const [volume, setVolume] = useState<boolean>(true)
  const handleVolumeChange = async () => {
    const newVolume = !volume
    setVolume(newVolume)
    newVolume
      ? await TrackPlayer.setVolume(Spacing.space_1)
      : await TrackPlayer.setVolume(Spacing.space_0)
  }
  return (
    <Pressable onPress={handleVolumeChange}>
      <Icon
        name={volume ? 'volume-high' : 'volume-off'}
        size={Spacing.space_30}
        color={AppColors.tertiary}
      />
    </Pressable>
  )
}

export default VolumeControl
