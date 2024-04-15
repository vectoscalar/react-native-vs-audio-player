import { ITimerProps } from 'App'

import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import TrackPlayer from 'react-native-track-player'

import { AppColors, Spacing } from '@theme'

import { styles } from './sleepTimer-styles'

const SleepTimer = ({ timerOptions }: { timerOptions: ITimerProps[] }) => {
  const [selectedTimer, setSelectedTimer] = useState<number>(0)
  const [selectedLabel, setSelectedLabel] = useState<string>('0')
  const selectedTimerRef = useRef(selectedTimer)

  const startTimer = async () => {
    const timer = selectedTimerRef.current
    await setTimeout(() => {
      TrackPlayer.stop()
      setSelectedTimer(0)
    }, timer)
  }
  const timerButtons = (selectedItem: ITimerProps) => {
    return (
      <View style={styles.dropdownButtonStyle}>
        <Text style={styles.dropdownButtonTxtStyle}>
          {(selectedItem && selectedItem.label) || selectedLabel}
        </Text>
      </View>
    )
  }
  return (
    <SelectDropdown
      data={timerOptions}
      onSelect={async (selectedItem: ITimerProps) => {
        selectedTimerRef.current = selectedItem.value
        setSelectedLabel(selectedItem.label)
        setSelectedTimer(selectedItem.value)
        await startTimer()
      }}
      renderButton={timerButtons}
      renderItem={(item, ind, isSelected) => {
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && { backgroundColor: AppColors.primary['200'] }),
            }}>
            <Text style={styles.dropdownItemTxtStyle}>{item.label}</Text>
          </View>
        )
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  )
}

export default React.memo(SleepTimer)
