import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    width: 180,
    alignItems: 'center',
    borderRadius: 5
  },
  image: {
    width: 170,
    height: 170,
    marginBottom: 8
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 4,
    marginBottom: 4,
    color: colors.textMainColor
  },
  priceMax: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 4,
    color: colors.mainColor
  },
  priceMin: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 4,
    color: colors.textPriceMinColor
  },
  viewText: {
    paddingLeft: 8,
    paddingRight: 8
  }
})
