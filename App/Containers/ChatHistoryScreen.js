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
import { NavigationActions } from 'react-navigation'

var firebase = require('firebase')

class ChatHistoryScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listMessengers: []
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
    this.getUser()
  }

  getUser () {
    AsyncStorage.getItem('@BookSharing:user')
    .then((res) => {
      this.mySelf = JSON.parse(res)
      let starCountRef = firebase.database().ref('message/' + this.mySelf.userid)
      starCountRef.once('value', function (snapshot) {
        let messages = snapshot.val()
        for (var mess1 in messages) {
          let mess = messages[mess1]
          let lastMessage = mess['lastMessage']
          let user = mess['user']
          let listMessengers = this.state.listMessengers
          if (user !== undefined) {
            listMessengers = listMessengers.concat([{user, lastMessage}])
            console.log('List Messengers:  ', listMessengers)
            this.setState({listMessengers})
          }
        }
      }.bind(this))
    })
  .catch((error) => console.log(error))
  }

  onPress (item) {
    console.log('Item:  ', item)
    this.props.navigateToChatScreen(item)
  }

  renderItem (item) {
    return (
      <ChatCell item={item} onPress={this.onPress.bind(this)} />
    )
  }
  render () {
    return (
      <Content>
        <FlatList
          data={this.state.listMessengers}
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
    navigateToChatScreen: (user) => dispatch(NavigationActions.navigate({
      routeName: 'ChatScreen',
      params: {user: user}
    }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatHistoryScreen)
