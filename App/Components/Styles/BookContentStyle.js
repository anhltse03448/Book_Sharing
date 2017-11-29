import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    alignSelf: 'center',
    height: 170,
    width: 130
  },
  title: {
    fontSize: 30,
    color: colors.mainColor,
    fontWeight: '500'
  },
  contentView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12
  }
})
