import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import colors from '../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  icon: {
    color: colors.mainColor,
    marginRight: 16
  },
  text: {
    color: colors.textMainColor,
    fontSize: 17
  },
  list: {
    marginTop: 12
  }
})
