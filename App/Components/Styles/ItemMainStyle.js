import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 150
  },
  image: {
    width: 130,
    height: 170,
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 4,
    marginBottom: 4,
    color: colors.textMainColor
  },
  priceMin: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 4,
    color: colors.textPriceMinColor
  },
  viewText: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    backgroundColor: 'white'
  }
})
