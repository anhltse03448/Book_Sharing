import React, { Component } from 'react'
// import { ScrollView, Text, Image, View } from 'react-native'
// import { Images } from '../Themes'
import LoginScreen from './LoginScreen'
import MainScreen from './MainScreen'
// Styles
// import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    // this.props.navigation.navigate('MainScreen')
    return (
      <MainScreen navigation={this.props.navigation} />
    )
  }
}
