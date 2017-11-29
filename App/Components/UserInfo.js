import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { Icon } from 'native-base'
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
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.container}>
          <Image
            style={styles.imageContainer}
            source={require('../Images/LoginBg.png')}
          />
          <View style={styles.info}>
            <Text style={styles.infoPrimary}>Xin chào , Tuấn Anh Lê</Text>
            <Text style={styles.infoSecondary}>anhltse.fpt@gmail.com</Text>
          </View>
          <View style={styles.forward}>
            <Icon ios='ios-arrow-forward-outline' android='md-arrow-forward' />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
