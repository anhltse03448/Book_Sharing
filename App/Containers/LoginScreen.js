import React, { Component } from 'react'
import { Text,
        Image
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
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  render () {
    return (
      <Container>
        <Content>
          <Image
            style={{
              alignSelf: 'center'
            }}
            source={require('../Images/Icons/Icon.png')}
          />
          <Text>
              BookSharing
          </Text>
          <Text>
            Social App
          </Text>
          <Text>
            Sign Up or Login With
          </Text>
          <Button iconLeft>
            <Icon name='sc-facebook' />
            <Text>Connect with Facebook</Text>
          </Button>
          <Button>
            <Text>Connecy with Google</Text>
          </Button>
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
