import { StyleSheet } from 'react-native'

import { Spacing } from '@theme'

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: Spacing.space_20,
    width: '90%',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.space_20,
  },
})
