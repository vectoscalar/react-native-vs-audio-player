import React from 'react'
import { View } from 'react-native'

import { NavigationCard } from '@components'
import { COMPONENT_NAME } from '@constants'

import { styles } from './home-styles'

const renderNavigationCard = () => {
  return COMPONENT_NAME.map(item => <NavigationCard key={item} title={item} />)
}

const Home = () => {
  return <View style={styles.container}>{renderNavigationCard()}
  </View>
}

export default Home
