import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'
export default StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.textMainColor,
    borderBottomWidth: 1,
    flexGrow: 5,
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
