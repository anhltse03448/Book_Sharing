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

class PersonalSettingScreen extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Thiết lập cá nhân</Title>
          </Body>
          <Right />
        </Header>
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