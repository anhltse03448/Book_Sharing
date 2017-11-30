import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Content,
  List,
  Toast
} from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PersonalSettingScreenStyle'
import Navigation from '../Components/Navigation'
import ListItem from '../Components/ListItem'

class PersonalSettingScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showToast: false
    }
  }

  render () {
    return (
      <Container>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title='Thiết lập cá nhân' />
        <Content>
          <List style={styles.listContainer}>
            <ListItem
              onPress={() => Toast.show({
                text: 'Thành công',
                position: 'bottom',
                buttonText: 'Ẩn'
              })}
              ios='ios-notifications-outline'
              android='md-notifications'
              text='Cho phép nhận thông báo'
            />
          </List>
          <List style={styles.listContainer}>
            <ListItem
              onPress={() => Toast.show({
                text: 'Mã chia sẻ của bạn là AHIHI',
                position: 'bottom',
                buttonText: 'Ẩn'
              })}
              ios='ios-people-outline'
              android='md-people'
              text='Mời bạn bè'
            />
            <ListItem
              ios='ios-star-outline'
              android='md-star'
              text='Đánh giá ứng dụng'
              hasSubPage
            />
            <ListItem
              ios='ios-help-circle-outline'
              android='md-help-circle'
              text='Trợ giúp'
              hasSubPage
            />
            <ListItem
              ios='ios-alert-outline'
              android='md-alert'
              text='Điều khoản sử dụng'
              hasSubPage
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalSettingScreen)
