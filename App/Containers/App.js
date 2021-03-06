import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import { Root, StyleProvider } from 'native-base'
import getTheme from '../../native-base-theme/components'
import OneSignal from 'react-native-onesignal'
import config from '../Config/FirebaseConfig'
import {
  AsyncStorage
} from 'react-native'
var firebase = require('firebase')
// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  constructor (props) {
    super(props)

    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
  }

  componentWillMount () {
    OneSignal.addEventListener('received', this.onReceived)
    OneSignal.addEventListener('opened', this.onOpened)
    OneSignal.addEventListener('registered', this.onRegistered)
    OneSignal.addEventListener('ids', this.onIds)
  }

  componentWillUnmount () {
    OneSignal.removeEventListener('received', this.onReceived)
    OneSignal.removeEventListener('opened', this.onOpened)
    OneSignal.removeEventListener('registered', this.onRegistered)
    OneSignal.removeEventListener('ids', this.onIds)
  }

  onReceived (notification) {
    console.log('Notification received: ', notification)
  }

  onOpened (openResult) {
    console.log('Message: ', openResult.notification.payload.body)
    console.log('Data: ', openResult.notification.payload.additionalData)
    console.log('isActive: ', openResult.notification.isAppInFocus)
    console.log('openResult: ', openResult)
  }

  onRegistered (notifData) {
    console.log('Device had been registered for push notifications!', notifData)
  }

  onIds (device) {
    AsyncStorage.getItem('@BookSharing:user')
    .then((res) => {
      if (res !== null) {
        let user = JSON.parse(res)
        let refId = 'user/' + user.userid
        firebase.database().ref(refId).set({
          userid: device.userId
        })
      }
    })
    .catch((error) => console.log(error))
  }

  render () {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme()}>
          <Root>
            <RootContainer />
          </Root>
        </StyleProvider>
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
