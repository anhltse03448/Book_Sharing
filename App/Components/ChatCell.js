import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/ChatCellStyle'
import {
  ListItem
} from 'native-base'
export default class ChatCell extends Component {
  render () {
    const item = this.props.item
    return (
      <ListItem style={styles.container}
        onPress={() => this.props.onPress(item.user)}>
        <Image
          source={{uri: item.user.avatar}}
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
            <Text style={styles.name}>{item.user.username ? item.user.username : item.name}</Text>
            <Text
              style={styles.message}
            >3:53 am</Text>
          </View>
          <Text
            style={styles.message}
          >{item.lastMessage}</Text>
        </View>
      </ListItem>
    )
  }
}
