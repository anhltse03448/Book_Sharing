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
  Header,
  Body,
  Title,
  Text
} from 'native-base'
import styles from './Styles/UserSettingScreenStyle'
import UserInfo from '../Components/UserInfo'

import ListItem from '../Components/ListItem'

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
          <List style={styles.listWrapper}>
            <ListItem
              ios='ios-bookmarks-outline'
              android='md-bookmarks'
              text='Sách đang theo dõi'
              subText='10'
              hasSubPage
            />
            <ListItem
              ios='ios-cafe-outline'
              android='md-cafe'
              text='Danh mục quan tâm'
              subText='3'
              hasSubPage
            />
          </List>
          <List style={styles.listWrapper}>
            <ListItem
              ios='ios-star-outline'
              android='md-star'
              text='Đánh giá'
              subText='4'
              hasSubPage
            />
          </List>
          <List style={styles.listWrapper}>
            <ListItem
              ios='ios-settings-outline'
              android='md-settings'
              text='Thiết lập cá nhân'
              hasSubPage
            />
            <ListItem
              ios='ios-log-out-outline'
              android='md-log-out'
              text='Thoát tài khoản'
              textColor='#e60000'
            />
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
