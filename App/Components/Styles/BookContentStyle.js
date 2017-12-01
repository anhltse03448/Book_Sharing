import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'
import variable from '../../../native-base-theme/variables/platform'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white'
  },
  image: {
    height: 120,
    width: 80,
    paddingRight: 8,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'red',
    shadowOffset: { height: 0, width: 0 }
  },
  contentViewContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  contentView: {
    flex: 1,
    paddingLeft: 8
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  },
  author: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondColor
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
  },
  buttonSubBlock: {
    flex: 1
  },
  buttonSub: {
    width: '100%'
  },
  icon: {
    backgroundColor: colors.mainColor,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: variable.borderRadiusBase,
    borderBottomLeftRadius: variable.borderRadiusBase
  },
  textAdd: {
    color: 'white',
    paddingRight: 12,
    fontSize: 17,
    marginLeft: 8,
    fontWeight: '500'
  },
  iconHeart: {
    color: colors.mainColor,
    marginTop: -8
  }
})
