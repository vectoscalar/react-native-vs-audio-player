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

import { styles } from './audioPlayer-styles'

const AudioPlayer = () => {
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
    <View style={styles.container}>
      {artwork ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: artwork }} style={styles.image} resizeMode="contain" />
        </View>
      ) : null}
      <View style={styles.songDetailsContainer}>
        <Progress />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
      <View style={styles.mediaControlContainer}>
        <VolumeControl />
        <SkipButton forward={false} />
        <PlayPauseButton />
        <SkipButton forward />
        <LoopButton />
      </View>
      <View style={styles.footerContainer}>
        <DownloadButton />
        <SpeedMenu />
        <FullScreenButton />
      </View>
    </View>
  )
}

export default AudioPlayer
