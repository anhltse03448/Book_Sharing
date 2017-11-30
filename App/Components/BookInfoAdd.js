import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/BookInfoAddStyle'
import {
  CardItem,
  Card
} from 'native-base'
export default class BookInfoAdd extends Component {
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
      <View style={styles.container}
      >
        <CardItem
          style={{
            flexDirection: 'row'
          }}>
          <Image
            source={require('../Images/LoginBg.png')}
            style={styles.image}
          />
          <View
            style={styles.content}
          >
            <Text
              style={styles.title}
            >Chắc ai đó sẽ về</Text>
            <Text
              style={styles.author}
            >Hary Kane</Text>
          </View>
        </CardItem>
      </View>
    )
  }
}
