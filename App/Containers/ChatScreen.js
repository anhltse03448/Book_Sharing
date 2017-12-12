import React, { Component } from 'react'
import { Platform,
  StyleSheet,
  Text,
  View,
AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ChatScreenStyle'
import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat'
import CustomActions from '../Components/CustomActions'
import CustomView from '../Components/CustomView'
import Navigation from '../Components/Navigation'
import {
  Container,
  Content,
  ActionSheet
} from 'native-base'
import OneSignal from 'react-native-onesignal'
import Loading from '../Components/Loading'
import config from '../Config/FirebaseConfig'
import moment from 'moment'

var firebase = require('firebase')

var BUTTONS = ['Hủy bỏ', 'Xóa tin nhắn']
var CANCEL_INDEX = 0
// Get a reference to the database service
class ChatScreen extends Component {
  constructor (props) {
    super(props)
    
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
      isLoading: true
    }
    this.isLoading = true
    this._isMounted = false
    this.onSend = this.onSend.bind(this)
    this.onReceive = this.onReceive.bind(this)
    this.renderCustomActions = this.renderCustomActions.bind(this)
    this.renderBubble = this.renderBubble.bind(this)
    this.renderSystemMessage = this.renderSystemMessage.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
    this.onLoadEarlier = this.onLoadEarlier.bind(this)
    this.playerId = ''

    this.user = this.props.navigation.state.params.user

    let refUser = firebase.database().ref('user/' + this.user.userid)
    refUser.once('value', function (snapshot) {
      if (snapshot.val() !== null) {
        if (snapshot.val().userid !== undefined) {
          this.playerId = snapshot.val().userid
        }
      }
    }.bind(this))
    AsyncStorage.getItem('@BookSharing:user')
      .then((res) => {
        this.mySelf = JSON.parse(res)
        let loadFirst = firebase.database().ref('message/' + this.mySelf.userid + '/' + this.user.userid)
        loadFirst.on('child_added', function (snapshot) {
          this.setState({
            isLoading: false
          })
          let mess = snapshot.val()
          if (mess.sentId !== this.mySelf.userid) {
            if (mess.sentId !== undefined) {
              this.onReceive(mess.message)
            }
          } else {
            let obj = mess
            let demo = {...obj.message, createdAt: new Date(obj.createdAt)}
            this.setState({
              messages: [demo].concat(this.state.messages)
            })
          }
        }.bind(this))
      })
    .catch((error) => console.log(error))
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000);
    this._isAlright = null
  }

  componentWillMount () {
    this._isMounted = true
    this.setState(() => {
      return {
        messages: []
      }
    })
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  onLoadEarlier () {
    this.setState((previousState) => {
      return {
        isLoadingEarlier: true
      }
    })

    setTimeout(() => {
      if (this._isMounted === true) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.prepend(previousState.messages),
            loadEarlier: false,
            isLoadingEarlier: false
          }
        })
      }
    }, 1000) // simulating network
  }

  sendData (sentId, receiveId, message) {
    console.log('UserID: ', this.playerId)
    let data = {}
    let content = message.text ? message.text : 'đã gửi ảnh'
    let messageContent = this.mySelf.username + ': ' + content
    let contents = {
      'en': messageContent
    }
    OneSignal.postNotification(contents, data, this.playerId)

    let createdAt1 = (new Date(message.createdAt)).getTime()
    let refId = 'message/' + sentId + '/' + receiveId + '/' + createdAt1

    let createdAt = message.createdAt.toString()
    firebase.database().ref(refId).set({
      sentId,
      message,
      receiveId,
      createdAt
    })
    let contentMess = message.text ? message.text : 'Đã gửi ảnh'
    let refId3 = 'message/' + sentId + '/' + receiveId
    firebase.database().ref(refId3).update({
      lastMessage: contentMess,
      createdAt,
      user: this.user
    })
    let refId2 = 'message/' + receiveId + '/' + sentId + '/' + createdAt1
    firebase.database().ref(refId2).set({
      sentId,
      message,
      receiveId,
      createdAt
    })

    let refId4 = 'message/' + receiveId + '/' + sentId
    firebase.database().ref(refId4).update({
      lastMessage: contentMess,
      user: this.mySelf,
      createdAt
    })
  }

  onSend (messages = []) {
    console.log('Messages:  ', messages[0])
    this.sendData(this.mySelf.userid, this.user.userid, messages[0])
  }

  answerDemo (messages) {
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'React Native is typing'
          }
        })
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive('Nice picture!')
          } else if (messages[0].location) {
            this.onReceive('My favorite place')
          } else {
            if (!this._isAlright) {
              this._isAlright = true
              this.onReceive('Alright')
            }
          }
        }
      }

      this.setState((previousState) => {
        return {
          typingText: null
        }
      })
    }, 1000)
  }

  onReceive (message) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, message)
      }
    })
  }

  /*
{
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: this.user.userid,
            name: this.user.username
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          }
        }
  */

  renderCustomActions (props) {
    if (Platform.OS === 'ios') {
      return (
        <CustomActions
          {...props}
        />
      )
    }
    const options = {
      'Action 1': (props) => {
        alert('option 1')
      },
      'Action 2': (props) => {
        alert('option 2')
      },
      'Cancel': () => {}
    }
    return (
      <Actions
        {...props}
        options={options}
      />
    )
  }

  renderBubble (props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0'
          }
        }}
      />
    )
  }

  renderSystemMessage (props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15
        }}
        textStyle={{
          fontSize: 14
        }}
      />
    )
  }

  renderCustomView (props) {
    return (
      <CustomView
        {...props}
      />
    )
  }

  renderFooter (props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      )
    }
    return null
  }

  onLongPress (context, message) {
    console.log('Content:  ', context)
    console.log('MEssage:  ', message)

    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        title: ''
      },
      buttonIndex => {
        if (buttonIndex === 1) {
          console.log('Message:  ', message)
          let refId = 'message/' + this.mySelf.userid + '/' + message.user.info.userid + '/' + ((new Date(message['createdAt'])).getTime() / 100)
          console.log('RefID:  ', refId)
          firebase.database().ref(refId).remove()

          let lists = this.state.messages
          lists = lists.filter(function (item) {
            return item._id !== message._id
          })
          this.setState({
            messages: lists
          })
        }
      }
    )
  }

  render () {
    let giftedChat = <GiftedChat
      messages={this.state.messages}
      onSend={this.onSend}
      user={{
        _id: this.user.userid,
        info: this.user
      }}
      onLongPress={this.onLongPress.bind(this)}
      renderActions={this.renderCustomActions}
      renderBubble={this.renderBubble}
      renderSystemMessage={this.renderSystemMessage}
      renderCustomView={this.renderCustomView}
      renderFooter={this.renderFooter}
    />
    let content = this.mySelf === null ? Loading : giftedChat
    return (
      <Container>
        <Navigation
          title={this.user.username} />
        {this.state.isLoading ? <Loading /> : content}
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen)
