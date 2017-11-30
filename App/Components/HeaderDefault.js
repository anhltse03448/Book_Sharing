import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/HeaderDefaultStyle'
import {
  Header,
  Body,
  Title
} from 'native-base'
export default class HeaderDefault extends Component {
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
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
      </Header>
    )
  }
}
