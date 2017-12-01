import React, { Component } from 'react'
import { Text,
        Image,
        View,
        AsyncStorage
} from 'react-native'
import {
  Button,
  Container,
  Content,
  Icon
} from 'native-base'

import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
const FBSDK = require('react-native-fbsdk')
const {
  LoginManager,
  AccessToken
} = FBSDK
import LinearGradient from 'react-native-linear-gradient'
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.signInWithFacebook = this.signInWithFacebook.bind(this)
  }
  signInWithFacebook() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          alert('Login cancelled')
        } else {
          alert('Login success with permissions: '
            +result.grantedPermissions.toString())
          console.log('result FB:  ', result)
          AccessToken.getCurrentAccessToken().then(
            async (data) => {
              //alert(data.accessToken.toString())
              try {
                await AsyncStorage.setItem('TokenID', 'I like to save it.')
              } catch (error) {
                // Error saving data
              }
            }
          )
        }
      },
      function (error) {
        alert('Login fail with error: ' + error)
      }
    )
  }
  render () {
    return (
      <Container>
        <Content contentContainerStyle={{
          marginTop: 64,
          alignItems: 'center'
        }}>
          <Image
            source={require('../Images/LoginBg.png')}
            style={{
              position: 'absolute',
              marginTop: -400
            }}
          />
          <Image
            style={{
              alignSelf: 'center',
              marginBottom: 40
            }}
            source={require('../Images/Icons/Icon.png')}
          />
          <LinearGradient colors={['#5074af', '#415887']}
            style={styles.buttonLinearGradient}>
            <Button iconLeft transparent style={styles.facebookButton}
              onPress={this.signInWithFacebook}>
              <LinearGradient colors={['#355088', '#4f72ad']}
                style={styles.socialIcon}>
                <Image source={require('../Images/icon_facebook.png')}
                  style={styles.socialImage} resizeMode='contain' />
              </LinearGradient>
              <Text style={styles.buttonText}>Connect with Facebook</Text>
            </Button>
          </LinearGradient>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              width: '100%',
              justifyContent: 'center'
            }}
          >
            <Icon
              name='ios-information-circle-outline'
              style={{
                fontSize: 27,
                marginRight: 10
              }}
            />
            <Text>We don't post anything to Facebook</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
