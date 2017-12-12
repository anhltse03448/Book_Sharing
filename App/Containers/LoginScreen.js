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
import MainScreen from './MainScreen'

class LoginScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      accessToken: '',
      loggingIn: false
    }

    this.signInWithFacebook = this.signInWithFacebook.bind(this)
  }

  componentDidMount () {
    AsyncStorage.getItem('@BookSharing:user')
      .then((res) => {
        if (res !== null) {
          console.log('User: ', JSON.parse(res))
          this.setState({isLogged: true})
        }
      })
      .catch((error) => console.log(error))
  }

  signInWithFacebook = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
        } else {
          console.log('result FB:  ', result)
          AccessToken.getCurrentAccessToken().then(
            async function (data) {
              try {
                this.setState({loggingIn: true})
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
    console.log(payload)
    if (payload) {
      try {
        AsyncStorage.setItem('@BookSharing:token', payload.token)
        AsyncStorage.setItem('@BookSharing:user',
          JSON.stringify(this.props.payload.user))
      } catch (error) {
        console.log(error)
      }
      this.props.navigate('MainScreen')
    }
    return (
      <Container>
        <Content contentContainerStyle={styles.containerStyle}>
          <Image
            source={require('../Images/LoginBg.png')}
            style={styles.bgStyle}
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
          {this.state.loggingIn
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
