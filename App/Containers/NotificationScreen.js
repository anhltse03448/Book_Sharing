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
        <HeaderDefault title='Thông báo' />
        <Content>
          <Tabs
            tabBarUnderlineStyle={{
              backgroundColor: colors.mainColor,
              height: 2
            }}>
            <Tab heading='Sách theo dõi'
              activeTabStyle={styles.tab}
              tabStyle={styles.tab}
              activeTextStyle={styles.text}
              textStyle={styles.text}>
              <NoticeScreen onPress={this.onPress} />
            </Tab>
            <Tab heading='Tin Nhắn'
              activeTabStyle={styles.tab}
              tabStyle={styles.tab}
              activeTextStyle={styles.text}
              textStyle={styles.text}
            >
              <ChatHistoryScreen onPress={this.onPress} />
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
/*

<Tabs
            tabBarUnderlineStyle={{
              backgroundColor: colors.mainColor,
              height: 2
            }}>
            <Tab heading='Sách đang mua'
              activeTabStyle={styles.tab}
              tabStyle={styles.tab}
              activeTextStyle={styles.text}
              textStyle={styles.text}>
              <NoticeScreen onPress={this.onPress} />
            </Tab>
            <Tab heading='Sách đang bán'
              activeTabStyle={styles.tab}
              tabStyle={styles.tab}
              activeTextStyle={styles.text}
              textStyle={styles.text}
            >
              <BookFollowScreen onPress={this.onPress} />
            </Tab>
          </Tabs>

*/