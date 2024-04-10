import React from 'react'
import { Text, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import TrackPlayer from 'react-native-track-player'

import { SPEED_OPTIONS } from '@constants'
import { AppColors } from '@theme'

import { styles } from './speedMenu-styles'

async function setSpeed(value: number) {
  await TrackPlayer.setRate(value)
}
const SpeedMenu = () => {
  const speedButtons = selectedItem => {
    return (
      <View style={styles.dropdownButtonStyle}>
        <Text style={styles.dropdownButtonTxtStyle}>
          {(selectedItem && selectedItem.title) || '1x'}
        </Text>
      </View>
    )
  }
  return (
    <SelectDropdown
      data={SPEED_OPTIONS}
      onSelect={selectedItem => {
        setSpeed(selectedItem.value)
      }}
      renderButton={speedButtons}
      renderItem={(item, ind, isSelected) => {
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && { backgroundColor: AppColors.primary['200'] }),
            }}>
            <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
          </View>
        )
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  )
}

export default SpeedMenu
