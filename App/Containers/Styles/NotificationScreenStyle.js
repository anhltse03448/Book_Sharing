import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import colors from '../../Themes/Colors'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  header: {
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0
  },
  tabActive: {
    backgroundColor: colors.mainColor,
    borderColor: colors.mainColor,
    borderBottomColor: colors.silver,
    borderBottomWidth: 1,
    borderTopWidth: 0
  }
})
