import React from 'react'
import { SafeAreaView } from 'react-native'

import { AudioPlayer } from '@components'

import { styles } from './app-styles.ts'

export interface ITimerProps {
  label: string
  value: number
}

function App(): React.JSX.Element {
  const timerOptions: ITimerProps[] = [
    { label: '5 mins', value: 300000 },
    { label: '10 mins', value: 600000 },
    { label: '15 mins', value: 900000 },
    { label: '30 mins', value: 1800000 },
    { label: '45 mins', value: 2700000 },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <AudioPlayer
        download={true}
        fullScreen={true}
        muteControl={true}
        repeatMode={true}
        skipButtons={true}
        speedControl={true}
        trackBarColor={''}
        backgroundThemeColor={''}
        playerControlColor={''}
        timer={timerOptions}
      />
    </SafeAreaView>
  )
}

export default App
