import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View } from 'react-native'
import styles from './Styles/CommentBoxStyle'
import {
  Input,
  Button,
  Icon
} from 'native-base'
export default class CommentBox extends Component {
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
          flexDirection: 'row'
        }}
      >
        <Input />
        <Button>
          <Icon name='ios-send-outline' />
        </Button>
      </View>
    )
  }
}
