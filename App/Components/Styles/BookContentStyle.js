import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 170,
    width: 130,
    paddingRight: 8,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'red',
    shadowOffset: { height: 0, width: 0 }
  },
  title: {
    fontSize: 22,
    color: colors.mainColor,
    fontWeight: '500'
  },
  contentView: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 4,
    paddingLeft: 12
  },
  author: {
    fontSize: 17,
    color: colors.textSecondColor,
    marginTop: 12
  },
  content: {
    fontSize: 18,
    padding: 8,
    fontWeight: '500',
    color: colors.textMainColor
  },
  priceMax: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 4,
    color: colors.mainColor
  },
  shareText: {
    marginTop: 12
  }
})
