import React, { useEffect, useState } from 'react'
import { Pressable, PressableProps, View } from 'react-native'
import TrackPlayer, { RepeatMode } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { AppColors, Spacing } from '@theme'

const RepeatModeIcons: Record<RepeatMode, string> = {
  [RepeatMode.Off]: 'repeat-off',
  [RepeatMode.Queue]: 'repeat',
  [RepeatMode.Track]: 'repeat-once',
}

const RepeatModeQueue: RepeatMode[] = [RepeatMode.Off, RepeatMode.Queue, RepeatMode.Track]

const LoopButton = () => {
  const [repeatMode, setRepeatMode] = useState<RepeatMode>(RepeatMode.Off)
  const handleRepeatModePress: PressableProps['onPress'] = async () => {
    try {
      const index = RepeatModeQueue.findIndex(ele => ele === repeatMode)
      const newIndex = index === RepeatModeQueue.length - 1 ? 0 : index + 1
      const newRepeatMode = RepeatModeQueue[newIndex]
      setRepeatMode(newRepeatMode)
      await TrackPlayer.setRepeatMode(newRepeatMode)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    TrackPlayer.getRepeatMode()
      .then(setRepeatMode)
      .catch(error => console.log(error))
  }, [repeatMode])
  return (
    <View>
      <Pressable onPress={handleRepeatModePress}>
        <Icon
          color={AppColors.tertiary}
          name={RepeatModeIcons[repeatMode]}
          size={Spacing.space_30}
        />
      </Pressable>
    </View>
  )
}

export default LoopButton
