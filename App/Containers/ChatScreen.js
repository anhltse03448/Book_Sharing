import React, { Component } from 'react'
import { Platform,
  StyleSheet,
  Text,
  View } from 'react-native'
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

    this._isAlright = null
  }

  componentWillMount () {
    this._isMounted = true
    this.setState(() => {
      return {
        messages: require('./messages.js')
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
            messages: GiftedChat.prepend(previousState.messages, require('./old_messages.js')),
            loadEarlier: false,
            isLoadingEarlier: false
          }
        })
      }
    }, 1000) // simulating network
  }

  onReceiveData (sentId, receiveId) {
    var starCountRef = firebase.database().ref('message/' + sentId + '/' + receiveId)
    starCountRef.on('value', function (snapshot) {
      console.log('Receive: ', snapshot.val())
    })
  }

  sendData (sentId, receiveId, message) {
    let refId = 'message/' + sentId + '/' + receiveId
    console.log('RefID:  ', refId)
    firebase.database().ref(refId).set({
      sentId,
      receiveId,
      message
    })

    let refId2 = 'message/' + receiveId + '/' + sentId
    firebase.database().ref(refId2).set({
      sentId,
      receiveId,
      message
    })
  }

  onSend (messages = []) {
    this.sendData('1', '2', messages.text)
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

  onReceive (text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native'
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          }
        })
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
            backgroundColor: '#f0f0f0',
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
    return (
      <Container>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title='Huy Trần' />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          loadEarlier={this.state.loadEarlier}
          onLoadEarlier={this.onLoadEarlier}
          isLoadingEarlier={this.state.isLoadingEarlier}

          user={{
            _id: 1, // sent messages should have same user._id
          }}

          renderActions={this.renderCustomActions}
          renderBubble={this.renderBubble}
          renderSystemMessage={this.renderSystemMessage}
          renderCustomView={this.renderCustomView}
          renderFooter={this.renderFooter}
        />
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
