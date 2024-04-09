import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { AppColors, Spacing } from '@theme'

interface IStyles {
  container: ViewStyle
  imageContainer: ViewStyle
  image: ImageStyle
  mediaControlContainer: ViewStyle
  title: TextStyle
  artist: TextStyle
  songDetailsContainer: ViewStyle
  footerContainer: ViewStyle
}
export const styles: IStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: Spacing.space_1,
    justifyContent: 'space-around',
  },
  imageContainer: {
    alignItems: 'center',
    flex: Spacing.space_4,
    justifyContent: 'center',
    padding: Spacing.space_20,
  },
  image: {
    alignSelf: 'center',
    height: '100%',
    width: '100%',
  },
  mediaControlContainer: {
    alignItems: 'center',
    flex: Spacing.space_1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: Spacing.space_16,
  },
  title: {
    color: AppColors.primary[700],
    fontSize: Spacing.space_32,
    marginBottom: Platform.OS === 'ios' ? Spacing.space_12 : Spacing.space_0,
    textAlign: 'center',
  },
  artist: {
    color: AppColors.primary[100],
    fontSize: Spacing.space_24,
    textAlign: 'center',
  },
  songDetailsContainer: {
    flex: Spacing.space_1,
    gap: Spacing.space_4,
    justifyContent: 'space-around',
  },
  footerContainer: {
    alignItems: 'center',
    flex: Spacing.space_1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
