import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import colors from '../../Themes/Colors'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  tab: {
    borderColor: colors.mainColor
  },
  text: {
    color: colors.mainColor
  }
})
