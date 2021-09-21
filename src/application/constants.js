import { Dimensions } from 'react-native';
import { colors } from './colors';

export const VERTICAL_PADDING = Dimensions.get('screen').width / 26
export const HORIZONTAL_PADDING = Dimensions.get('screen').width / 16

export const MAX_WIDTH = Dimensions.get('screen').width
export const MAX_HEIGHT = Dimensions.get('screen').width

export const TEXT_STYLES = {
  color: colors.accent,
  fontSize: Dimensions.get('screen').height / 46,
}