import React from 'react'
import { SafeAreaView } from 'react-native'

import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { AppNavigator } from '@navigation'
import { AppColors } from '@theme'

import { styles } from './app-styles'

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: AppColors.secondary,
  },
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={AppTheme}>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
