import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/NavigationStyle'
import {
  Header,
  Left,
  Button,
  Body,
  Title,
  Icon,
  Right
} from 'native-base'
export default class Navigation extends Component {
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
      <Header>
        <Left>
          <Button transparent onPress={this.props.onPressBack}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}
