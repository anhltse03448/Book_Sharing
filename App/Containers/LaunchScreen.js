import React, { Component} from 'react'
// import { ScrollView, Text, Image, View } from 'react-native'
// import { Images } from '../Themes'
import LoginScreen from './LoginScreen'
import MainScreen from './MainScreen'
import Loading from '../Components/Loading'

// Styles
// import styles from './Styles/LaunchScreenStyles'
import {
  AsyncStorage
} from 'react-native'

export default class LaunchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogging: true,
      isLogged: false
    }
  }
  componentWillMount () {
    AsyncStorage.getItem('@BookSharing:user')
      .then((res) => {
        if (res) {
          this.setState({
            isLogging: false,
            isLogged: true
          })
        } else {
          this.setState({
            isLogging: false,
            isLogged: false
          })
        }
        console.log(JSON.parse(res))
      })
      .catch((error) => console.log(error))
  }

  render () {
    return (
      this.state.isLogging
      ? <Loading style={{flex: 1, flexDirection: 'row'}} />
        : (
          !this.state.isLogged
          ? <LoginScreen />
          : <MainScreen navigation={this.props.navigation} />
        )
    )
  }
}
/*
*/
