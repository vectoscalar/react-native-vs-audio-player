import TrackPlayer, { Event } from 'react-native-track-player'

export const PlaybackService = async function () {
  // play
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play())
  // pause
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause())
}
