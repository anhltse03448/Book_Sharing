import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import colors from '../../Themes/Colors'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  seeAll: {
    color: colors.mainColor
  },
  viewHeader: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row'
  },
  btnSeeAll: {
    height: 40
  }
})
