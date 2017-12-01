import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'
export default StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: colors.textMainColor,
    borderBottomWidth: 1,
    borderBottomColor: colors.seperatorColor
  },
  seeMore: {
    alignSelf: 'flex-end',
    height: 30
  },
  textSeeMore: {
    padding: 8,
    color: colors.mainColor,
    fontSize: 16
  }
})
