import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'

export default StyleSheet.create({
  icon: {
    color: colors.mainColor,
    marginRight: 16
  },
  text: {
    color: colors.textMainColor,
    fontSize: 17
  },
  list: {
  },
  cancelSearch: {
    margin: 0,
    padding: 0
  },
  searchOptionContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  searchResultOverlay: {
    flex: 1
  }
})
