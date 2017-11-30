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
  },
  viewShare: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  btnNumber: {
    padding: 18,
    height: 30,
    backgroundColor: colors.mainColor
  },
  shareText: {
    paddingLeft: 8,
    fontSize: 18,
    fontWeight: '500'
  }
})
