import React, { Component } from 'react'
// import { ScrollView, Text, Image, View } from 'react-native'
// import { Images } from '../Themes'
import LoginScreen from './LoginScreen'
import MainScreen from './MainScreen'
import BookDetailScreen from './BookDetailScreen'
// Styles
// import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    // this.props.navigation.navigate('MainScreen')
    return (
      //<LoginScreen />
      <MainScreen navigation={this.props.navigation} />
    )
  }
}
/*
*/
