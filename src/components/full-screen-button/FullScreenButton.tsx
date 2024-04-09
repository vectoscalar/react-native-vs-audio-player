import React, { useState } from 'react'
import { StatusBar, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const FullScreenButton = () => {
  const [fullScreen, setFullScreen] = useState<boolean>(false)

  return (
    <TouchableOpacity onPress={() => setFullScreen(!fullScreen)}>
      <StatusBar
        backgroundColor={fullScreen ? 'white' : 'black'}
        barStyle={fullScreen ? 'light-content' : 'dark-content'}
      />
      <Icon name={fullScreen ? 'minimize' : 'maximize'} size={24} />
    </TouchableOpacity>
  )
}

export default FullScreenButton
