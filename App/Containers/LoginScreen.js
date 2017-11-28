import React, { Component } from 'react'
import { Text,
        Image,
        View
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
import LinearGradient from 'react-native-linear-gradient'
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
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
          <LinearGradient colors={['#df4a32', '#e02f2f']}
            style={styles.buttonLinearGradient}>
            <Button iconLeft transparent style={styles.googleButton}
              onPress={this.signInWithGoogle}>
              <LinearGradient colors={['#c32c2b', '#df4932']}
                style={styles.socialIcon}>
                <Image source={require('../Images/icon_google.png')}
                  style={styles.socialImage} resizeMode='contain' />
              </LinearGradient>
              <Text style={styles.buttonText}>Connect with Google</Text>
            </Button>
          </LinearGradient>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20
            }}
          >
            <Icon
              name='ios-information-circle-outline'
              style={{
                fontSize: 27,
                marginRight: 10
              }}
            />
            <Text>We don't post anything to Facebook or Google</Text>
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
