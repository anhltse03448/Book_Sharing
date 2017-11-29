import React, { Component } from 'react'
import {
  View,
  Image,
  Text as RNText
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import {
  Container,
  Content,
  List,
  ListItem,
  Header,
  Body,
  Left,
  Title,
  Icon,
  Text
} from 'native-base'
import styles from './Styles/UserSettingScreenStyle'
import UserInfo from '../Components/UserInfo'

class UserSettingScreen extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Cá nhân</Title>
          </Body>
        </Header>
        <Content>
          <UserInfo />
          <List>
            <ListItem icon>
              <Left>
                <Icon ios='ios-cafe-outline' android='md-cafe' />
              </Left>
              <Body>
                <Text>Danh mục quan tâm</Text>
              </Body>
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
