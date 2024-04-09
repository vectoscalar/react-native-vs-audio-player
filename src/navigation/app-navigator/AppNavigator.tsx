import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RouteName } from '@constants'
import { Home } from '@screens'
import { AppNavigatorParamList } from '@types'

const AppStack = createNativeStackNavigator<AppNavigatorParamList>()

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name={RouteName.Home} component={Home} />
    </AppStack.Navigator>
  )
}

export default AppNavigator
