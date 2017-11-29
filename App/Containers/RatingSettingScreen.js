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
import Navigation from '../Components/Navigation'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/RatingSettingScreenStyle'

class RatingSettingScreen extends Component {
  render () {
    return (
      <Container>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title='Đánh giá' />
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

export default connect(mapStateToProps, mapDispatchToProps)(RatingSettingScreen)
