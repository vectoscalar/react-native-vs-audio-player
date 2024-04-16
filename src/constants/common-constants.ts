import { Track } from 'react-native-track-player'

export const PLAYBACK_TRACKS: Track[] = [
  {
    id: 1,
    url: require('../assets/audio/OMaahi.mp3'), // Load media from the network
    title: 'O Maahi',
    artist: 'Arijit Singh',
    album: 'Dunki',
    genre: 'Progressive House, Electro House',
    artwork: 'https://picsum.photos/200',
  },
  {
    id: 2,
    url: require('../assets/audio/Levels.mp3'), // Load media from the network
    title: 'Levels',
    artist: 'Sidhu Moosewala',
    album: 'Levels',
    genre: 'Progressive House, Electro House',
    artwork: 'https://picsum.photos/200',
  },
]

export const SPEED_OPTIONS = [
  { title: '0.5x', value: 0.5 },
  { title: '1x', value: 1 },
  { title: '1.5x', value: 1.5 },
  { title: '2x', value: 2 },
]
