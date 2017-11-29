import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    width: 170,
    alignItems: 'flex-start',
    padding: 10
  },
  image: {
    width: 170,
    height: 180,
    marginBottom: 12
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 4,
    color: Colors.textMainColor
  },
  price: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 4,
    color: Colors.textPriceColor
  }
})
