import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { AppColors, Spacing } from '@theme'

interface IStyles {
  dropdownButtonStyle: ViewStyle
  dropdownButtonTxtStyle: TextStyle
  dropdownMenuStyle: ViewStyle
  dropdownItemStyle: ViewStyle
  dropdownItemTxtStyle: TextStyle
}
export const styles: IStyles = StyleSheet.create({
  dropdownButtonStyle: {
    alignItems: 'center',
    backgroundColor: AppColors.primary[50],
    borderRadius: Spacing.space_12,
    height: '28%',
    justifyContent: 'center',
    width: '18%',
  },
  dropdownButtonTxtStyle: {
    color: AppColors.primary[400],
    fontSize: Spacing.space_16,
    fontWeight: '500',
    textAlign: 'center',
  },
  dropdownMenuStyle: {
    backgroundColor: AppColors.primary[50],
    borderRadius: Spacing.space_8,
  },
  dropdownItemStyle: {
    alignItems: 'center',
    borderColor: AppColors.primary[100],
    borderWidth: Spacing.space_0_5,
    justifyContent: 'center',
    paddingHorizontal: Spacing.space_20,
    paddingVertical: Spacing.space_8,
    width: '100%',
  },
  dropdownItemTxtStyle: {
    color: AppColors.primary[400],
    flex: Spacing.space_1,
    fontSize: Spacing.space_12,
    fontWeight: '500',
    textAlign: 'center',
  },
})
