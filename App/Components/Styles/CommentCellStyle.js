import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  commentView: {
    padding: 8,
    flex: 1
  },
  userName: {
    fontWeight: '600'
  },
  comment: {
    marginTop: 4,
    fontSize: 15
  },
  time: {
    marginTop: 2,
    marginLeft: 8,
    color: colors.textSecondColor
  }
})
