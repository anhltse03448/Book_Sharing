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
import colors from '../Themes/Colors'
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
        <Left
          style={{
            flexGrow: 1
          }}>
          <Button transparent onPress={this.props.onPressBack}>
            <Icon name='arrow-back'
              style={{
                color: colors.mainColor
              }} />
          </Button>
        </Left>
        <Body
          style={{
            flexGrow: 6
          }}>
          <Title>{this.props.title}</Title>
        </Body>
        <Right
          style={{
            flexGrow: 1
          }}
        />
      </Header>
    )
  }
}
