import React from 'react'
import { Text, View } from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'

import Slider from '@react-native-community/slider'

import { AppColors } from '@theme'

import { styles } from './progress-styles'

const Progress = ({ trackBarColor }: { trackBarColor: string }) => {
  const { position, duration } = useProgress()

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
  }

  const handleProgress = async (value: number) => {
    await TrackPlayer.seekTo(value)
  }

  return (
    <View>
      <Slider
        style={styles.container}
        value={position}
        maximumValue={duration}
        minimumTrackTintColor={trackBarColor || AppColors.tertiary}
        maximumTrackTintColor={AppColors.primary[700]}
        thumbTintColor={trackBarColor || AppColors.tertiary}
        onValueChange={value => handleProgress(value)}
      />
      <View style={styles.timeContainer}>
        <Text>{formatTime(position)}</Text>
        <Text>{formatTime(duration)}</Text>
      </View>
    </View>
  )
}

export default Progress
