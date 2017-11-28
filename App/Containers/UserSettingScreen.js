import React, { Component } from 'react'
import { View,
        Image,
        Text
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import {
  Container,
  Content,
  List,
  ListItem
} from 'native-base'
import styles from './Styles/UserSettingScreenStyle'
import UserInfo from '../Components/UserInfo'

class UserSettingScreen extends Component {
  render () {
    return (
      <Container>
        <Content>
          <UserInfo />
          <List>
            <ListItem>
              
            </ListItem>
          </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingScreen)
