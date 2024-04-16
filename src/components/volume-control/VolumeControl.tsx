import React, { useState } from 'react'
import { Pressable, PressableProps } from 'react-native'
import TrackPlayer from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { AppColors, Spacing } from '@theme'

const VolumeControl = ({ playerControlColor }: { playerControlColor: string }) => {
  const [isVolumeOn, setIsVolumeOn] = useState<boolean>(true)

  const handleVolumeChange: PressableProps['onPress'] = async () => {
    const newVolume = !isVolumeOn
    setIsVolumeOn(newVolume)
    newVolume
      ? await TrackPlayer.setVolume(Spacing.space_1)
      : await TrackPlayer.setVolume(Spacing.space_0)
  }
  return (
    <Pressable onPress={handleVolumeChange}>
      <Icon
        name={isVolumeOn ? 'volume-high' : 'volume-off'}
        size={Spacing.space_30}
        color={playerControlColor || AppColors.tertiary}
      />
    </Pressable>
  )
}

export default VolumeControl
