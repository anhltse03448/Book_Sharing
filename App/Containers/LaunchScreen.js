import React, { Component} from 'react'
// import { ScrollView, Text, Image, View } from 'react-native'
// import { Images } from '../Themes'
import LoginScreen from './LoginScreen'
import MainScreen from './MainScreen'
import BookDetailScreen from './BookDetailScreen'
// Styles
// import styles from './Styles/LaunchScreenStyles'
import {
  AsyncStorage
} from 'react-native'

export default class LaunchScreen extends Component {
  render () {
    return (
      <Login />
      // <MainScreen navigation={this.props.navigation} />
    )
  }
}
/*
*/
