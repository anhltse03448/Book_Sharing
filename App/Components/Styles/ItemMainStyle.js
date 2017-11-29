import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

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
    fontWeight: '400',
    marginTop: 4,
    marginBottom: 4,
    color: Colors.textMainColor
  },
  priceMax: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 4,
    color: Colors.textPriceMaxColor
  },
  priceMin: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 4,
    color: Colors.textPriceMinColor
  },
  viewText: {
    paddingLeft: 8,
    paddingRight: 8
  }
})
