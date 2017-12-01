import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  name: {
    color: colors.textMainColor,
    fontSize: 16,
    fontWeight: '600'
  },
  message: {
    color: colors.textSecondColor,
    fontSize: 13
  }
})
