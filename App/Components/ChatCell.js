import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/ChatCellStyle'
import {
  ListItem
} from 'native-base'
export default class ChatCell extends Component {
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
      <ListItem style={styles.container}>
        <Image
          source={require('../Images/LoginBg.png')}
          style={styles.image}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingLeft: 12
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              paddingBottom: 4
            }}
          >
            <Text style={styles.name}>Booksharing</Text>
            <Text
              style={styles.message}
            >3:53 am</Text>
          </View>
          <Text
            style={styles.message}
          >Bạn: Bao giờ mới xong</Text>
        </View>
      </ListItem>
    )
  }
}
