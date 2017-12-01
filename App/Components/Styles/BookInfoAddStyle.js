import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.seperatorColor
  },
  image: {
    height: 70,
    width: 50
  },
  content: {
    justifyContent: 'flex-start',
    paddingLeft: 12
  },
  title: {
    fontSize: 18,
    color: colors.textMainColor,
    fontWeight: '600'
  },
  author: {
    fontSize: 16,
    marginTop: 4,
    color: colors.textSecondColor
  }
})
