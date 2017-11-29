import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/CommentCellStyle'
import {
  Card
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
    return (
      <Card style={styles.container}>
        <Image
          source={require('../Images/LoginBg.png')}
          style={styles.image}
        />
        <View style={styles.commentView}>
          <View
            style={{
              padding: 8,
              flex: 1
            }}>
            <Text style={styles.userName}>Mai</Text>
            <Text style={styles.comment}>Sách hay</Text>
          </View>
          <Text style={styles.time}>04/04/2017</Text>
        </View>
      </Card>
    )
  }
}
