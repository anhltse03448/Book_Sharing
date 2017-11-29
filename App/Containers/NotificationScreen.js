import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import {
  Container,
  Content,
  Tabs,
  Tab
} from 'native-base'
import styles from './Styles/NotificationScreenStyle'

class NotificationScreen extends Component {
  render () {
    return (
      <Container>
        <Content>
          <Tabs>
            <Tab heading='Tab1' />
            <Tab heading='Tab2' />
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
