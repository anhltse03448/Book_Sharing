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
import AuthActions from '../Redux/AuthRedux'

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

    this.state = {
      accessToken: ''
    }

    this.signInWithFacebook = this.signInWithFacebook.bind(this)
  }
  signInWithFacebook = () => {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          
        } else {
          console.log('result FB:  ', result)
          AccessToken.getCurrentAccessToken().then(
            async function (data) {
              //alert(data.accessToken.toString())
              try {
                await AsyncStorage.setItem('@MySuperStore:key', data.accessToken)
                console.log('Data: ' + data.accessToken)
                // this.setState({accessToken: data.accessToken})
                // console.log(this.props)
                this.props.authWithFacebook(data.accessToken)
              } catch (error) {
                console.log('Error Login FB: ', error)
                // Error saving data
              }
            }.bind(this)
          )
        }
      }.bind(this),
      function (error) {
        alert('Login fail with error: ' + error)
      }
    )
  }
  render () {
    console.log('Payload: ' , this.props.payload)
    return (
      <Container>
        <Content contentContainerStyle={{
          marginTop: 64,
          flex: 1,
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
            resizeMode='contain'
            style={{
              alignSelf: 'center',
              marginBottom: 40,
              padding: 12,
              width: '85%'
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
  const { payload } = state.auth
  return {
    payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authWithFacebook: (token) => dispatch(AuthActions.authRequest(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
