import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, FlatList } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ChatHistoryScreenStyle'
import ChatCell from '../Components/ChatCell'
import {
  Content
} from 'native-base'
class ChatHistoryScreen extends Component {
  renderItem (item) {
    return (
      <ChatCell />
    )
  }
  render () {
    return (
      <Content>
        <FlatList
          data={[{key: 'a'},{key: 'b'}]}
          renderItem={({item}) => this.renderItem(item)}
          />
      </Content>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatHistoryScreen)
