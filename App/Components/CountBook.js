import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/CountBookStyle'
import colors from '../Themes/Colors'
import {
  Button
} from 'native-base'

export default class CountBook extends Component {
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 4
          }}
        >
          <Button transparent rounded
            style={{
              width: 27,
              height: 27,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.mainColor
            }}>
            <Text
              style={styles.priceMax}
            >{41 + ' '}</Text>
          </Button>
          <Text
            style={{
              marginLeft: 4,
              color: colors.textSecondColor
            }}
          >cuốn sách</Text>
        </View>
      </View>
    )
  }
}
