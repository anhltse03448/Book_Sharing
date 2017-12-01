import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/ContentBookStyle'
import {
  Card,
  Button,
  Icon,
  CardItem,
  ListItem
} from 'native-base'
import colors from '../Themes/Colors'
import SeperatorItem from '../Components/SeperatorItem'
export default class ContentBook extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShow: true
    }
  }

  onPressMore () {

  }

  render () {
    const content = 'Đắc Nhân Tâm cụ thể và chi tiết với những chỉ dẫn để dẫn đạo người, để gây thiện cảm và dẫn dắt người khác,... những hướng dẫn ấy, qua thời gian'
    let contentShow = ''
    if (content.length >= 100) {
      contentShow = content.substring(0, 100) + '...'
    }
    let button = <Button transparent
      onPress={() => {
        this.setState({
          isShow: !this.state.isShow
        })
      }}
      style={styles.seeMore}>
      <Icon name='ios-arrow-down-outline' />
    </Button>
    return (
      <ListItem
        style={{
          borderTopWidth: 0.5,
          borderTopColor: colors.seperatorColor,
          borderBottomWidth: 0.5,
          borderBottomColor: colors.seperatorColor,
          flex: 1,
          width: '100%'
        }}
      >
        <Text style={styles.content}>
          {contentShow}
        </Text>
        {
          this.state.isShow ? button : null
        }
      </ListItem>
    )
  }
}
