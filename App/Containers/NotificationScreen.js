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

class NotificationScreen extends Component {
  render () {
    return (
      <Container>
        <Header>

        </Header>
        <Content>
          <Tabs>
            <Tab heading='Đang theo dõi'
              activeTabStyle={styles.tab}
              tabStyle={styles.tab}
              textStyle={styles.text}>
              <NoticeScreen />
            </Tab>
            <Tab heading='Sách tìm kiếm'>
              <BookFollowScreen />
            </Tab>
          </Tabs>
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
