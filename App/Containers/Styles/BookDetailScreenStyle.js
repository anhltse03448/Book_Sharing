import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import colors from '../../Themes/Colors'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  content: {
    fontSize: 18,
    padding: 8,
    fontWeight: '500',
    color: colors.textMainColor
  },
  tab: {
    borderColor: colors.mainColor
  },
  text: {
    color: colors.mainColor
  },
  viewShare: {
    flexDirection: 'row',
    backgroundColor: 'white'
  }
})
