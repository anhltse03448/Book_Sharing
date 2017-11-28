import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View,
        Text,
        Image } from 'react-native'
import {
  Icon
} from 'native-base'
import styles from './Styles/InterestTopicStyle'

export default class InterestTopic extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>InterestTopic Component</Text>
        <View style={{
          flexDirection: 'row'
        }}>
          <Image />
          <Icon name='md-heart' />
        </View>
      </View>
    )
  }
}
