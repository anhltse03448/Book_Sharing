import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/UserInfoStyle'

export default class UserInfo extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 12,
          alignItems: 'center',
          backgroundColor: 'white'
        }}
      >
        <Image
          style={{
            height: 70,
            width: 70,
            borderRadius: 35,
            marginRight: 30
          }}
          source={require('../Images/LoginBg.png')}
        />
        <View>
          <Text>Xin chào , Tuấn Anh Lê</Text>
          <Text>anhltse.fpt@gmail.com</Text>
        </View>
      </View>
    )
  }
}
