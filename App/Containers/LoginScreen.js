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
import { NavigationActions } from 'react-navigation'
import Loading from '../Components/Loading'

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
      accessToken: '',
      loggingIn: false,
      isLogged: false
    }

    this.signInWithFacebook = this.signInWithFacebook.bind(this)
  }

  componentDidMount () {
    AsyncStorage.getItem('@BookSharing:user', (err, res) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({isLogged: true})
      }
    })
  }

  signInWithFacebook = () => {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          
        } else {
          console.log('result FB:  ', result)
          AccessToken.getCurrentAccessToken().then(
            async function (data) {
              try {
                this.setState({loggingIn: true})
                await AsyncStorage.setItem('@BookSharing:token', data.accessToken)
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
        console.log('Login fail with error: ' + error)
      }
    )
  }
  render () {
    const { payload } = this.props
    if (payload) {
      try {
        AsyncStorage.setItem('@BookSharing:user',
          JSON.stringify(this.props.payload.user))
      } catch (error) {
        console.log(error)
      }
      this.props.navigate('MainScreen')
    }
    if (this.state.isLogged) {
      setTimeout(() => this.props.navigate('MainScreen'), 1000)
    }
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
              padding: 12,
              width: '85%'
            }}
            source={require('../Images/Icons/Icon.png')}
          />
          {this.state.loggingIn || this.state.isLogged
            ? <Loading style={{padding: 0, backgroundColor: 'transparent'}} />
            : <LinearGradient colors={['#5074af', '#415887']}
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
            </LinearGradient>}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
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
    navigate: (routeName, params) => dispatch(NavigationActions.navigate({
      routeName: routeName,
      params: params
    })),
    authWithFacebook: (token) => dispatch(AuthActions.authRequest(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
