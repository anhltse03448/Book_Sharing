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
  Content
} from 'native-base'
import Loading from '../Components/Loading'
var config = {
  apiKey: 'AIzaSyDqDgXPnwY941ky7zdZ4U_PRHVGfU015r4',
  authDomain: 'book-sharing-c8c09.firebaseapp.com',
  databaseURL: 'https://book-sharing-c8c09.firebaseio.com',
  storageBucket: 'book-sharing-c8c09.appspot.com'
}
var firebase = require('firebase')
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
      isLoadingEarlier: false
    }
    
    this._isMounted = false
    this.onSend = this.onSend.bind(this)
    this.onReceive = this.onReceive.bind(this)
    this.renderCustomActions = this.renderCustomActions.bind(this)
    this.renderBubble = this.renderBubble.bind(this)
    this.renderSystemMessage = this.renderSystemMessage.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
    this.onLoadEarlier = this.onLoadEarlier.bind(this)

    this.user = this.props.navigation.state.params.user
    AsyncStorage.getItem('@BookSharing:user')
      .then((res) => {
        this.mySelf = JSON.parse(res)
        console.log('Myself: ', JSON.parse(res))
        console.log('Ref:  ', 'message/' + this.mySelf.id + '/' + this.user.userid)
        var starCountRef = firebase.database().ref('message/' + this.mySelf.id + '/' + this.user.userid)
        starCountRef.on('child_added', function (snapshot) {
          console.log('Receive: ', snapshot.val())
          let mess = snapshot.val()
          if (mess.sentId === this.mySelf.id) {
            this.onSend([mess.message])
          }
          this.onReceive(mess.message)
        }.bind(this))
      })
    .catch((error) => console.log(error))
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
    let refId = 'message/' + sentId + '/' + receiveId + '/' + message._id
    console.log('RefID:  ', refId)
    firebase.database().ref(refId).set({
      sentId,
      receiveId,
      message
    })

    let refId2 = 'message/' + receiveId + '/' + sentId + '/' + message._id
    firebase.database().ref(refId2).set({
      sentId,
      receiveId,
      message
    })
  }

  onSend (messages = []) {
    this.sendData(this.mySelf.id, this.user.userid, messages[0])
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages)
      }
    })
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
    );
  }

  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    );
  }

  renderCustomView(props) {
    return (
      <CustomView
        {...props}
      />
    );
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

  render () {
    let giftedChat = <GiftedChat
      messages={this.state.messages}
      onSend={this.onSend}
      loadEarlier={this.state.loadEarlier}
      onLoadEarlier={this.onLoadEarlier}
      isLoadingEarlier={this.state.isLoadingEarlier}

      user={{
        _id: this.user.userid // sent messages should have same user._id
      }}

      renderActions={this.renderCustomActions}
      renderBubble={this.renderBubble}
      renderSystemMessage={this.renderSystemMessage}
      renderCustomView={this.renderCustomView}
      renderFooter={this.renderFooter}
    />
    let content = this.mySelf === null ? Loading : giftedChat
    return (
      <Container>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title={this.user.username} />
        {content}
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
