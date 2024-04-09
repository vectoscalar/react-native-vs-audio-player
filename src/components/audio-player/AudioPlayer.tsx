import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, SafeAreaView, Text, View } from 'react-native'
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

  async function setPlayer() {
    let trackObject: Track | undefined
    setIsLoading(true)
    try {
      const trackIndex = await TrackPlayer.getActiveTrackIndex()
      trackObject = await TrackPlayer.getTrack(trackIndex as number)
      console.log(`Title: ${trackObject?.title}`)
    } catch {
      await TrackPlayer.setupPlayer()
      await TrackPlayer.add(PLAYBACK_TRACKS)
      const trackIndex = await TrackPlayer.getActiveTrackIndex()
      trackObject = await TrackPlayer.getTrack(trackIndex as number)
      console.log(`Title: ${trackObject?.title}`)
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
    <SafeAreaView style={styles.container}>
      {currentTrack?.artwork ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: currentTrack.artwork }} style={styles.image} resizeMode="contain" />
        </View>
      ) : null}
      <View style={styles.songDetailsContainer}>
        <Progress />
        <Text style={styles.title}>{currentTrack?.title}</Text>
        <Text style={styles.artist}>{currentTrack?.artist}</Text>
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
    </SafeAreaView>
  )
}

export default AudioPlayer
