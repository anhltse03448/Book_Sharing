import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/BookContentStyle'
import {
} from 'native-base'
export default class BookContent extends Component {
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
          padding: 24,
          backgroundColor: 'white'
        }}
      >
        <Image style={styles.image}
          resizeMode='cover'
          source={require('../Images/cogai.png')}
        />
        <View
          style={styles.contentView}>
          <Text
            style={styles.title}
          >Chắc ai đó sẽ về</Text>
          <Text
            style={styles.author}
          >Tô Hoài
          </Text>
        </View>
      </View>
    )
  }
}
