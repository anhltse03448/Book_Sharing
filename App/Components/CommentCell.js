import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/CommentCellStyle'
import {
  ListItem
} from 'native-base'
export default class CommentCell extends Component {
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
    const { item } = this.props
    return (
      <ListItem style={styles.container}>
        <Image
          source={{uri: item.avatar}}
          style={styles.image}
        />
        <View style={styles.commentView}>
          <View
            style={{
              paddingLeft: 8,
              flex: 1
            }}>
            <Text style={styles.userName}>{item.username}</Text>
            <Text style={styles.comment}>{item.content}</Text>
          </View>
          <Text style={styles.time}>{new Date(item.timestamp).toLocaleString()}</Text>
        </View>
      </ListItem>
    )
  }
}
