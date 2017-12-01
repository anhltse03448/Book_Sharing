import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 40,
    width: '100%'
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    position: 'absolute',
    top: -27
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.seperatorColor
  },
  finish: {
    color: colors.mainColor
  },
  nhanxet: {
    color: colors.textMainColor,
    fontWeight: '500'
  }
})
