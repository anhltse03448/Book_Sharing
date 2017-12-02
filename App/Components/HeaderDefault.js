import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/HeaderDefaultStyle'
import {
  Header,
  Body,
  Title
} from 'native-base'
import colors from '../Themes/Colors'
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
      <Header
        style={{
          backgroundColor: colors.mainColor
        }}
      >
        <Body style={{alignItems: 'center'}}>
          <Title
            style={{
              color: 'white',
            }}
          >{this.props.title}</Title>
        </Body>
      </Header>
    )
  }
}
