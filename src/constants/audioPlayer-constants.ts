import { Platform } from 'react-native'

export const JumpInterval = {
  forward: 10,
  backward: -10,
}

export const IS_IOS = Platform.OS === 'ios'
export enum SpeedRate {
  speed_0_5 = '0.5x',
  speed_1 = '1x',
  speed_1_5 = '1.5x',
  speed_2 = '2x',
}
