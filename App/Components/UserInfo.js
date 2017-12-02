import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableHighlight, AsyncStorage } from 'react-native'
import { Icon } from 'native-base'
import styles from './Styles/UserInfoStyle'

export default class UserInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null
    }
  }
  componentDidMount () {
    AsyncStorage.getItem('@BookSharing:user')
    .then((res) => {
      if (res !== null) {
        console.log('User: ', JSON.parse(res))
        this.setState({
          user: JSON.parse(res)
        })
      }
    })
    .catch((error) => console.log(error))
  }

  render () {
    const { user } = this.props
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.container}>
          <Image
            style={styles.imageContainer}
            source={{uri: user.avatar}}
          />
          <View style={styles.info}>
            <Text style={styles.infoPrimary}>Xin chào , {user.username}</Text>
            <Text style={styles.infoSecondary}>{user.email}</Text>
          </View>
          <View style={styles.forward}>
            <Icon ios='ios-arrow-forward-outline' android='md-arrow-forward' />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
