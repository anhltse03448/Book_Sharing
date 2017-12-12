import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import BookFollowScreen from './BookFollowScreen'
import NoticeScreen from './NoticeScreen'
// Styles
import {
  Container,
  Content,
  Tabs,
  Tab,
  Header
} from 'native-base'
import styles from './Styles/NotificationScreenStyle'
import HeaderDefault from '../Components/HeaderDefault'
import colors from '../Themes/Colors'
import ChatHistoryScreen from './ChatHistoryScreen'
class NotificationScreen extends Component {
  constructor (props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }
  onPress (item) {
    console.log('Press On Notification Screen:  ', item)
  }
  render () {
    return (
      <Container>
        <HeaderDefault title='Tin nhắn' />
        <Content>
          <ChatHistoryScreen onPress={this.onPress} />
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

export default connect(mapStateToProps, mapDispatchToProps)(NotificationScreen)