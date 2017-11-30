import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View } from 'react-native'
import styles from './Styles/CommentBoxStyle'
import {
  Input,
  Button,
  Icon,
  Item  
} from 'native-base'
import colors from '../Themes/Colors'
export default class CommentBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }
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
          <Input placeholder='Send a comment'
            onChangeText={(text) => {
              this.setState({
                inputValue: text
              })
            }}
            value={this.state.inputValue}
          />
        </Item>
        <Button transparent
          onPress={() => this.props.onSendPress(this.state.inputValue)}
        >
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
