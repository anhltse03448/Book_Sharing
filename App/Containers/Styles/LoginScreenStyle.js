import { StyleSheet,
        Dimensions } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

const { height, width } = Dimensions.get('window')
const buttonWidth = width * 0.8
const buttonHeight = 50

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  button: {
    height: 60,
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  container: {
    alignItems: 'center',
    height: '100%'
  },
  signInCover: {
    width: 100,
    height: 100,
    marginTop: 50
  },
  buttonLinearGradient: {
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    width: buttonWidth
  },
  socialIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialImage: {
    height: '100%'
  },
  buttonText: {
    flex: 1,
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  facebookButton: {
    width: buttonWidth,
    borderWidth: 2,
    borderColor: '#334c80',
    borderRadius: 5,
    height: buttonHeight
  },
  googleButton: {
    width: buttonWidth,
    borderWidth: 2,
    borderColor: '#e02f2f',
    borderRadius: 5,
    height: buttonHeight
  },
  signUp: {
    fontWeight: '400',
    fontSize: 20,
    marginTop: 30
  },
  appName: {

  },
  socialApp: {
    fontSize: 30,
    fontWeight: '400'
  },
  styleNotice: {
    fontWeight: '400',
    fontSize: 30
  }
})
