import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View } from 'react-native'
import styles from './Styles/CommentBoxStyle'
import {
  Input,
  Button,
  Icon,
  Item,
  Label
} from 'native-base'
import colors from '../Themes/Colors'
export default class CommentBox extends Component {
  render () {
    return (
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          paddingTop: 8,
          paddingBottom: 8,
          alignItems: 'center'
        }}
      >
        <Item regular
          style={{
            flex: 1
          }}>
          <Input placeholder='Send a comment' />
        </Item>
        <Button transparent>
          <Icon name='ios-send-outline'
            color={colors.mainColor}
            style={{
              fontSize: 44,
              color: colors.mainColor
            }} />
        </Button>
      </View>
    )
  }
}
