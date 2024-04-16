import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { Spacing } from '@theme'

import { styles } from './navigationCard-styles'

interface INavigationCardProps {
  title: string
}

const NavigationCard = (props: INavigationCardProps) => {
  const { title } = props
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Icon name="right" size={Spacing.space_16} />
      </View>
    </TouchableOpacity>
  )
}

export default NavigationCard
