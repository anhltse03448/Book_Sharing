import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import {
  Container,
  Content
} from 'native-base'

import Navigation from '../Components/Navigation'

// Styles
import styles from './Styles/UserSharedInfoScreenStyle'

class UserSharedInfoScreen extends Component {
  render () {
    const { navigation } = this.props
    return (
      <Container>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title='Huy Trần' />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserSharedInfoScreen)
