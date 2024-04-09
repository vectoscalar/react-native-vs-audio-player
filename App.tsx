/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react'
import { SafeAreaView } from 'react-native'

import { AudioPlayer } from '@components'

// The player is ready to be used
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AudioPlayer />
    </SafeAreaView>
  )
}

export default App
