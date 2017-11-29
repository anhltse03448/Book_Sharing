import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Button,
  Icon,
  Left,
  Right,
  Header,
  Body,
  Title
} from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/PersonalSettingScreenStyle'
import Navigation from '../Components/Navigation'
class PersonalSettingScreen extends Component {
  render () {
    return (
      <Container>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title='Thiết lập cá nhân' />
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalSettingScreen)
