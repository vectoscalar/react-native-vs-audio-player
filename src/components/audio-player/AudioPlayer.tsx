import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import TrackPlayer, { Track, useActiveTrack } from 'react-native-track-player'

import {
  DownloadButton,
  FullScreenButton,
  LoopButton,
  PlayPauseButton,
  Progress,
  SkipButton,
  SpeedMenu,
  VolumeControl,
} from '@components'
import { PLAYBACK_TRACKS } from '@constants'

import SleepTimer from '../sleep-timer/SleepTimer'

import { styles } from './audioPlayer-styles'

const AudioPlayer = ({
  backgroundThemeColor,
  download,
  fullScreen,
  muteControl,
  playerControlColor,
  repeatMode,
  skipButtons,
  speedControl,
  trackBarColor,
  timer,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentTrack, setCurrentTrack] = useState<Track>()

  const { artwork, title, artist } = { ...currentTrack }
  const setPlayer = async () => {
    let trackObject: Track | undefined
    setIsLoading(true)
    try {
      const trackIndex = await TrackPlayer.getActiveTrackIndex()
      trackObject = await TrackPlayer.getTrack(trackIndex as number)
    } catch {
      await TrackPlayer.setupPlayer()
      await TrackPlayer.add(PLAYBACK_TRACKS)
      const trackIndex = await TrackPlayer.getActiveTrackIndex()
      trackObject = await TrackPlayer.getTrack(trackIndex as number)
    } finally {
      setIsLoading(false)
      setCurrentTrack(trackObject)
    }
  }

  useEffect(() => {
    setPlayer()
  }, [useActiveTrack()?.title])

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View style={[styles.container, { backgroundColor: backgroundThemeColor }]}>
      {artwork ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: artwork }} style={styles.image} resizeMode="contain" />
        </View>
      ) : null}
      <View style={styles.songDetailsContainer}>
        <Progress trackBarColor={trackBarColor} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
      <View style={styles.mediaControlContainer}>
        {muteControl && <VolumeControl playerControlColor={playerControlColor} />}
        {skipButtons && <SkipButton forward={false} playerControlColor={playerControlColor} />}
        <PlayPauseButton playerControlColor={playerControlColor} />
        {skipButtons && <SkipButton forward playerControlColor={playerControlColor} />}
        {repeatMode && <LoopButton playerControlColor={playerControlColor} />}
      </View>
      <View style={styles.footerContainer}>
        {download && <DownloadButton />}
        {speedControl && <SpeedMenu />}
        {timer && <SleepTimer timerOptions={timer} />}
        {fullScreen && <FullScreenButton />}
      </View>
    </View>
  )
}

export default AudioPlayer
