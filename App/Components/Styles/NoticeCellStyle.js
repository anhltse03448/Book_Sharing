import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 10,
    paddingBottom: 10
  },
  image: {
    height: 70,
    width: 70
  },
  commentView: {
    padding: 10
  },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    color: colors.mainColor
  },
  textComment: {
    color: colors.textMainColor
  },
  textTime: {
    color: colors.textSecondColor
  },
  nameUser: {
    fontWeight: '800'
  }
})
