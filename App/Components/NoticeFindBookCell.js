import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/NoticeFindBookCellStyle'
import {
  Icon,
  ListItem
} from 'native-base'
export default class NoticeFindBookCell extends Component {
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
          style={styles.commentView}
        >
          <Text
            style={styles.textComment}
          >
            <Text style={styles.nameUser}>
              {'Lê Tuấn Anh ' + ' '}
            </Text> bình luận về sách của bạn</Text>
          <View
            style={styles.timeView}
          >
            <Icon
              style={styles.icon}
              name='ios-chatbubbles-outline' />
            <Text
              style={styles.textTime}
            > 1 hours ago</Text>
          </View>
        </View>
      </ListItem>
    )
  }
}
