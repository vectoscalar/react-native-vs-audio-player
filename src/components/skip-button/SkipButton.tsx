import React from 'react'
import { Alert, Pressable, PressableProps } from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/Feather'

import { JumpInterval } from '@constants'
import { AppColors, Spacing } from '@theme'

interface ISkipButtonProps {
  forward: boolean
}
const SkipButton = (props: ISkipButtonProps) => {
  const { forward } = props
  const iconName: string = forward ? 'rotate-cw' : 'rotate-ccw'
  const progress = useProgress()
  const currentPosition: number = progress.position
  const totalDuration: number = progress.duration

  const jumpForward: PressableProps['onPress'] = async () => {
    if (currentPosition >= totalDuration) {
      Alert.alert('The song is already at the end')
    } else {
      const newPosition = currentPosition + JumpInterval.forward
      await TrackPlayer.seekTo(newPosition)
    }
  }
  const jumpBackward: PressableProps['onPress'] = async () => {
    if (currentPosition <= 0) {
      Alert.alert('The song is already at the end')
    } else {
      const newPosition = currentPosition + JumpInterval.backward
      await TrackPlayer.seekTo(newPosition)
    }
  }
  return (
    <Pressable onPress={forward ? jumpForward : jumpBackward}>
      <Icon name={iconName} size={Spacing.space_30} color={AppColors.tertiary} />
    </Pressable>
  )
}

export default SkipButton
