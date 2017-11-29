import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    backgroundColor: 'white'
  },
  button: {
    borderColor: colors.mainColor,
    margin: 4
  },
  text: {
    fontSize: 14,
    color: colors.mainColor,
    padding: 8
  }
})
