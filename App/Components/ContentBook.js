import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/ContentBookStyle'
import {
  Card,
  Button
} from 'native-base'
import SeperatorItem from '../Components/SeperatorItem'
export default class ContentBook extends Component {
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
    const content = 'Đắc Nhân Tâm cụ thể và chi tiết với những chỉ dẫn để dẫn đạo người, để gây thiện cảm và dẫn dắt người khác,... những hướng dẫn ấy, qua thời gian'
    let contentShow = ''
    if (content.length >= 100) {
      contentShow = content.substring(0, 100) + '...'
    }
    return (
      <Card horizontal>
        <Text
          style={styles.content}
        >
          {contentShow}
        </Text>
        <SeperatorItem />
        <Button transparent
          style={styles.seeMore}>
          <Text
            style={styles.textSeeMore}
          >Xem thêm</Text>
        </Button>
      </Card>
    )
  }
}
