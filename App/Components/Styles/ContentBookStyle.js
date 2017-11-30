import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'
export default StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    fontSize: 18,
    padding: 8,
    fontWeight: '500',
    color: colors.textMainColor,
    borderBottomWidth: 1,
    borderBottomColor: colors.seperatorColor
  },
  seeMore: {
    alignSelf: 'center',
    height: 30
  },
  textSeeMore: {
    padding: 8,
    color: colors.mainColor,
    fontSize: 16
  }
})
