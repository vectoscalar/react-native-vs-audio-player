import { StyleSheet } from 'react-native'

import { AppColors, Spacing, Typography } from '@theme'

export const styles = StyleSheet.create({
  container: {
    borderBottomColor: AppColors.primary[100],
    borderBottomWidth: Spacing.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.space_20,
  },
  title: {
    color: AppColors.primary[700],
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
  },
})
