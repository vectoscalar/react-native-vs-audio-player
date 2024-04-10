import React from 'react'
import { SafeAreaView } from 'react-native'

import { AudioPlayer } from '@components'
import { Spacing } from '@theme'

// The player is ready to be used
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: Spacing.space_1 }}>
      <AudioPlayer />
    </SafeAreaView>
  )
}

export default App
