import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import colors from '../../Themes/Colors'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  done: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 18
  },
  doneButton: {
    backgroundColor: colors.mainColor,
    height: 50,
    alignSelf: 'center',
    width: '70%',
    justifyContent: 'center',
    marginTop: 12
  }
})
