import React, { Component } from 'react'
import {
  View,
  Image,
  Text as RNText,
  TouchableHighlight
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
  Title
} from 'native-base'
import styles from './Styles/UserSettingScreenStyle'
import UserInfo from '../Components/UserInfo'
import ListItem from '../Components/ListItem'
import HeaderDefault from '../Components/HeaderDefault'
import colors from '../Themes/Colors'
class UserSettingScreen extends Component {
  render () {
    const { navigation } = this.props
    return (
      <Container>
        <HeaderDefault title='Cá nhân' />
        <Content>
          <UserInfo onPress={() => navigation.navigate('UserProfileScreen')} />
          <List style={styles.listWrapper}>
            <ListItem
              style={{
                textColor: colors.mainColor
              }}
              onPress={() => navigation.navigate('BookSubscribedScreen')}
              ios='ios-albums-outline'
              android='md-albums'
              text='Sách đang bán'
              subText='10'
              hasSubPage
            />
            <ListItem
              style={{
                textColor: colors.mainColor
              }}
              onPress={() => navigation.navigate('BookSubscribedScreen')}
              ios='ios-albums-outline'
              android='md-albums'
              text='Sách đã mua'
              subText='10'
              hasSubPage
            />
          </List>
          <List style={styles.listWrapper}>
            <ListItem
              onPress={() => navigation.navigate('BookSubscribedScreen')}
              ios='ios-bookmarks-outline'
              android='md-bookmarks'
              text='Sách yêu thích'
              subText='10'
              hasSubPage
            />
            <ListItem
              onPress={() => navigation.navigate('InterestedCategoryScreen')}
              ios='ios-cafe-outline'
              android='md-cafe'
              text='Danh mục quan tâm'
              subText='3'
              hasSubPage
            />
          </List>          
          <List style={styles.listWrapper}>
            <ListItem
              onPress={() => navigation.navigate('RatingSettingScreen')}
              ios='ios-star-outline'
              android='md-star'
              text='Đánh giá'
              subText='4'
              hasSubPage
            />
            <ListItem
              onPress={() => navigation.navigate('PersonalSettingScreen')}
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
