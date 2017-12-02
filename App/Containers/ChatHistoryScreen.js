import React, { Component } from 'react'
import { FlatList, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ChatHistoryScreenStyle'
import ChatCell from '../Components/ChatCell'
import {
  Content
} from 'native-base'
import config from '../Config/FirebaseConfig'
var firebase = require('firebase')

class ChatHistoryScreen extends Component {
  constructor (props) {
    super(props)
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
    this.getUser()
  }

  getUser () {
    AsyncStorage.getItem('@BookSharing:user')
    .then((res) => {
      this.mySelf = JSON.parse(res)
      let starCountRef = firebase.database().ref('message/' + this.mySelf.id+'/')
      starCountRef.on('child_added', function (snapshot) {
        console.log('Receive: ', snapshot.val())
      })
    })
  .catch((error) => console.log(error))
  }

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
